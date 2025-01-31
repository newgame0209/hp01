import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: '必須項目が入力されていません。' },
        { status: 400 }
      );
    }

    // 環境変数の確認ログ
    console.log('SMTP設定:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO
    });

    // SMTPサーバーの設定
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
      },
      debug: true
    });

    // SMTP接続テスト
    try {
      await transporter.verify();
      console.log('SMTP接続テスト成功');
    } catch (verifyError) {
      console.error('SMTP接続テストエラー:', verifyError);
      throw verifyError;
    }

    console.log('メール送信を試みます...');

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

    const info = await transporter.sendMail(mailOptions);
    console.log('送信結果:', info);

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('エラー詳細:', {
      name: error.name,
      message: error.message,
      code: error.code,
      command: error.command,
      stack: error.stack
    });
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。' },
      { status: 500 }
    );
  }
}
