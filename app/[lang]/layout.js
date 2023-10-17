import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { Kameron, Raleway } from 'next/font/google'
import ProgressProviders from '@/components/ProgressProvider'

const kameron = Kameron({ 
  subsets: ['latin'],
  variable: '--kameron'
})
const raleway = Raleway({ 
  subsets: ['latin'],
  variable: '--raleway'
})

export const metadata = {
  metadataBase: new URL('https://www.sepos.fi'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fi': '/fi',
    },
  },
}

export default function RootLayout({ children, params: { lang } }) {
  return (
    <html lang="fi">
      <body className={`${kameron.variable} ${raleway.variable}`}>
        <Nav lang={lang} />
        <ProgressProviders>
          {children}
        </ProgressProviders>
        <Footer english={true}/>
      </body>
    </html>
  )
}
