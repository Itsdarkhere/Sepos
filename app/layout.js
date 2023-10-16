import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import './globals.css'
import { Kameron, Raleway } from 'next/font/google'

const kameron = Kameron({ 
  subsets: ['latin'],
  variable: '--kameron'
})
const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--raleway'
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${kameron.variable} ${raleway.variable}`}>
        <Nav />
        {children}
        <Footer english={true}/>
      </body>
    </html>
  )
}
