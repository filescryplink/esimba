
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  // Redirect all requests from esimba.online to app.esimba.online/dashboard/login
  if (host !== 'app.esimba.online') {
    const url = request.nextUrl.clone()
    url.hostname = 'app.esimba.online'
    // Use the same locale from the request, or default to vi if none
    const locale = request.nextUrl.pathname.startsWith('/vi') ? 'vi' : 
                   request.nextUrl.pathname.startsWith('/en') ? 'en' : 'vi'
    url.pathname = `/${locale}/dashboard/login`
    return NextResponse.redirect(url, 301) // 301 = permanent redirect
  }
  
  return NextResponse.next()
}

// Configure which paths to run middleware on - ALL paths!
export const config = {
  matcher: ['/:path*', '/:locale/:path*'],
}
