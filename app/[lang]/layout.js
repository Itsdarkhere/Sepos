import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { Kameron, Raleway } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextTopLoader from 'nextjs-toploader';

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
    <html lang="fi" data-theme="light">
      <body className={`${kameron.variable} ${raleway.variable}`}>
        <Nav lang={lang} />
        {children}
        <Footer english={true} />
        <SpeedInsights/>
        <NextTopLoader color='#ff8b06' height={2} showSpinner={false} />
      </body>
    </html>
  )
}
