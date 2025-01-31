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

    console.log('SMTP設定:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO
    });

    const transporter = nodemailer.createTransport({
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
      }
    });

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

    await transporter.sendMail(mailOptions);

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

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'メールの送信に失敗しました。' }),
    };
  }
};
