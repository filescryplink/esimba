'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (hasRedirected) return;

    if (status === 'authenticated') {
      setHasRedirected(true);
      if (session?.user?.role === 'super_admin') {
        router.replace('/admin');
      } else if (session?.user?.role === 'partner_admin') {
        router.replace('/partner');
      } else {
        router.replace('/');
      }
    } else if (status === 'unauthenticated') {
      setHasRedirected(true);
      router.replace('/login');
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}