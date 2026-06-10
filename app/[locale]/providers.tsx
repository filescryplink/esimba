
'use client';

import { NextIntlClientProvider } from 'next-intl';
import { SessionProvider } from 'next-auth/react';

export default function Providers({ 
  children, 
  locale, 
  messages 
}: { 
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <SessionProvider>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </SessionProvider>
  );
}
