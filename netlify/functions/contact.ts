import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

export const handler: Handler = async (event) => {
  // POSTメソッド以外は許可しない
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, company, message } = JSON.parse(event.body || '{}');

    if (!name || !email || !company || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: '必須項目が入力されていません。' }),
      };
    }

    // 環境変数のログ出力
    console.log('環境変数:', {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_FROM: process.env.SMTP_FROM,
      SMTP_TO: process.env.SMTP_TO,
      // パスワードは安全のため最初の2文字のみ表示
      SMTP_PASSWORD: process.env.SMTP_PASSWORD ? `${process.env.SMTP_PASSWORD.substring(0, 2)}...` : undefined
    });

    // SMTPトランスポートの設定
    const transportOptions = {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      },
      debug: true,
      logger: true // 詳細なログを有効化
    };

    console.log('SMTP設定:', transportOptions);

    const transporter = nodemailer.createTransport(transportOptions);

    // SMTP接続テスト
    try {
      console.log('SMTP接続テスト開始...');
      await transporter.verify();
      console.log('SMTP接続テスト成功');
    } catch (verifyError) {
      console.error('SMTP接続テストエラー:', {
        name: verifyError.name,
        message: verifyError.message,
        code: verifyError.code,
        command: verifyError.command
      });
      throw verifyError;
    }

    const mailBody = `
      お問い合わせがありました。

      お名前: ${name}
      メールアドレス: ${email}
      会社名: ${company}
      
      お問い合わせ内容:
      ${message}
    `.trim();

    const mailOptions = {
      from: {
        name: 'お問い合わせフォーム',
        address: process.env.SMTP_FROM
      },
      to: process.env.SMTP_TO,
      subject: '【お問い合わせ】Webサイトからのお問い合わせ',
      text: mailBody,
    };

    console.log('メール送信オプション:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    console.log('メール送信開始...');
    const info = await transporter.sendMail(mailOptions);
    console.log('メール送信成功:', info);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'お問い合わせを受け付けました。' }),
    };
  } catch (error) {
    console.error('エラー詳細:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });

    // エラーメッセージをより詳細に
    let errorMessage = 'メールの送信に失敗しました。';
    if (error.code === 'ECONNECTION') {
      errorMessage = 'SMTPサーバーへの接続に失敗しました。';
    } else if (error.code === 'EAUTH') {
      errorMessage = '認証に失敗しました。';
    }

    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: errorMessage,
        details: {
          code: error.code,
          message: error.message
        }
      }),
    };
  }
};
