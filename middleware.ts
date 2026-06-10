
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  // Redirect all requests with /dashboard (any locale) from esimba.online to app.esimba.online
  if (host !== 'app.esimba.online' && request.nextUrl.pathname.includes('/dashboard')) {
    const url = request.nextUrl.clone()
    url.hostname = 'app.esimba.online'
    return NextResponse.redirect(url, 301) // 301 = permanent redirect
  }
  
  return NextResponse.next()
}

// Configure which paths to run middleware on
export const config = {
  matcher: ['/:locale/dashboard/:path*', '/dashboard/:path*'],
}
