import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl.clone();
  
  if (host === 'app.esimba.online' || host.startsWith('app.esimba')) {
    if (!url.pathname.startsWith('/dashboard')) {
      url.pathname = `/dashboard${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    if (!url.pathname.startsWith('/public') && !url.pathname.startsWith('/api') && !url.pathname.startsWith('/_next')) {
      url.pathname = `/public${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
