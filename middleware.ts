import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['vi', 'en'],
  defaultLocale: 'vi',
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const path = request.nextUrl.pathname;

  if (path.startsWith('/_next') || path.startsWith('/static') || path.includes('.')) {
    return NextResponse.next();
  }

  if (host === 'app.esimba.online' || host.startsWith('app.esimba')) {
    // For app subdomain, just use intl middleware
    return intlMiddleware(request);
  } else {
    // For public, just use intl middleware (since we moved public to [locale] structure)
    return intlMiddleware(request);
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
