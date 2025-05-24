import Navigation from './_components/Navigation'
import Logo from './_components/Logo'

import { Josefin_Sans } from 'next/font/google'
import '@/app/_styles/globals.css'

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
})

type ChildrenProps = {
  children: React.ReactNode
}

export const metadata = {
  title: {
    template: '%s / The Wild Oasis',
    default: 'Welcome / The Wild Oasis',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forest.',
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copywright by POCODEV</footer>
      </body>
    </html>
  )
}
