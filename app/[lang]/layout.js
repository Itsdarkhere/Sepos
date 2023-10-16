import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { Kameron, Raleway } from 'next/font/google'

const kameron = Kameron({ 
  subsets: ['latin'],
  variable: '--kameron'
})
const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--raleway'
})

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body className={`${kameron.variable} ${raleway.variable}`}>
        <Nav />
        {children}
        <Footer english={true}/>
      </body>
    </html>
  )
}
