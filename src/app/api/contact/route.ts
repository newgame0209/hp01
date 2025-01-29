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

    // より基本的なSMTP設定
    const transporter = nodemailer.createTransport({
      pool: true,  // コネクションプールを使用
      maxConnections: 1,
      service: 'Onamae',  // お名前.jpを指定
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    console.log('メール送信を試みます...');

    const mailBody = `
      お問い合わせがありました。

      お名前: ${name}
      メールアドレス: ${email}
      会社名: ${company}
      
      お問い合わせ内容:
      ${message}
    `.trim();

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: '【お問い合わせ】Webサイトからのお問い合わせ',
      text: mailBody,
    });

    console.log('送信結果:', info);

    return NextResponse.json(
      { message: 'お問い合わせを受け付けました。' },
      { status: 200 }
    );

  } catch (error) {
    console.error('送信エラー:', error);
    return NextResponse.json(
      { error: 'メールの送信に失敗しました。' },
      { status: 500 }
    );
  }
}
