import './globals.css'
import type { Metadata } from 'next'
import { Inter, Noto_Sans } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })
const inter = Noto_Sans({
  weight: ["300", "400", '500', "700"],
  subsets: ["latin",],
  display: "swap",
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const b = 5;
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
