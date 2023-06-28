import '../../styles/globals.scss'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

//Fonst
const inter = Inter({ subsets: ['latin'] })
const jakarta = localFont({
  src: '../../public/font/PlusJakartaSans.ttf',
  display: 'swap',
})

export const metadata = {
  title: 'Leadster',
  description: 'Landing Page criada para o desafio Leadster',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>{children}</body>
    </html>
  )
}
