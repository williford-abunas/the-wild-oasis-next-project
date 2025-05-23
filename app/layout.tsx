import Navigation from './components/Navigation'
import Logo from './components/Logo'

type ChildrenProps = {
  children: React.ReactNode
}

export const metadata = {
  title: "The Wild Oasis",
}

export default function RootLayout({ children } : ChildrenProps) {
  return (
    <html lang="en">
      <body>
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
