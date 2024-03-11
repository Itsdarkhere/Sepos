import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'fi']

function getLocale(request) {
    let headersY = request.headers.get('accept-language');
    let headers = { 'accept-language': headersY }
    let languages = new Negotiator({ headers }).languages()
    let defaultLocale = 'en'
    return  match(languages, locales, defaultLocale);
}

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: [
      // Skip all internal paths (_next)
    //   '/((?!.*\\.).*)',
      '/((?!_next|favicon\\.ico).*)',
    ],
}