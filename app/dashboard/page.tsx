'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    console.log('[DashboardHome]', { status, session, hasRedirected });
    
    if (hasRedirected) return;

    if (status === 'authenticated') {
      console.log('[DashboardHome] Authenticated');
      setHasRedirected(true);
      if (session?.user?.role === 'super_admin') {
        console.log('[DashboardHome] Redirecting to /admin');
        router.replace('/admin');
      } else if (session?.user?.role === 'partner_admin') {
        console.log('[DashboardHome] Redirecting to /partner');
        router.replace('/partner');
      } else {
        console.log('[DashboardHome] Redirecting to / (public)');
        router.replace('/');
      }
    } else if (status === 'unauthenticated') {
      console.log('[DashboardHome] Unauthenticated');
      setHasRedirected(true);
      router.replace('/login');
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600">Đang chuyển hướng...</p>
      <div className="mt-4 text-xs text-gray-400 max-w-md">
        <pre>{JSON.stringify({ status, session }, null, 2)}</pre>
      </div>
    </div>
  );
}