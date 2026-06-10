'use client';

import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (hasRedirected) return;

    if (status === 'authenticated') {
      setHasRedirected(true);
      if (session?.user?.role === 'super_admin') {
        router.replace(`/${locale}/dashboard/admin`);
      } else if (session?.user?.role === 'partner_admin') {
        router.replace(`/${locale}/dashboard/partner`);
      } else {
        router.replace(`/${locale}`);
      }
    } else if (status === 'unauthenticated') {
      setHasRedirected(true);
      router.replace(`/${locale}/dashboard/login`);
    }
  }, [status, session, router, locale]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );
}
