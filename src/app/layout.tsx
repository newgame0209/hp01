import './globals.css'
import type { Metadata } from 'next'

/**
 * @docs
 * メタデータの設定
 */
export const metadata: Metadata = {
  title: 'Corporate Website',
  description: 'CREATIVE COMPANY',
}

/**
 * @docs
 * ルートレイアウトコンポーネント
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
