
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const supportedLocales = ['vi', 'en']

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  const path = request.nextUrl.pathname

  // First, check if the path is missing a locale
  const pathnameIsMissingLocale = supportedLocales.every(
    (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`
  )

  // Redirect if missing locale
  if (pathnameIsMissingLocale) {
    const url = request.nextUrl.clone()
    // Get preferred locale from Accept-Language header or default to vi
    const acceptLanguage = request.headers.get('accept-language') || ''
    let locale = 'vi'
    if (acceptLanguage.includes('en')) {
      locale = 'en'
    }
    url.pathname = `/${locale}${path === '/' ? '' : path}`
    return NextResponse.redirect(url, 307) // 307 = temporary redirect
  }

  // Redirect /dashboard paths from esimba.online to app.esimba.online
  if (host !== 'app.esimba.online' && path.includes('/dashboard')) {
    const url = request.nextUrl.clone()
    url.hostname = 'app.esimba.online'
    return NextResponse.redirect(url, 301) // 301 = permanent redirect
  }

  return NextResponse.next()
}

// Configure which paths to run middleware on
export const config = {
  matcher: ['/', '/(vi|en)/:path*', '/dashboard/:path*', '/:path*'],
}
