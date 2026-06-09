import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const path = request.nextUrl.pathname;

  // Skip internal paths and static files
  if (path.startsWith('/_next') || path.startsWith('/static') || path.includes('.')) {
    return NextResponse.next();
  }

  if (host === 'app.esimba.online' || host.startsWith('app.esimba')) {
    // Rewrite dashboard routes to (dashboard) group
    const rewrittenPath = path === '/' ? '/dashboard' : `/dashboard${path}`;
    return NextResponse.rewrite(new URL(rewrittenPath, request.url));
  } else {
    // Rewrite public routes to (public) group
    const rewrittenPath = path === '/' ? '/public' : `/public${path}`;
    return NextResponse.rewrite(new URL(rewrittenPath, request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
