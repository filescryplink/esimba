import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['vi', 'en'];

export default getRequestConfig(async ({ locale }) => {
  const validLocale = locale as string;
  if (!locales.includes(validLocale)) notFound();

  return {
    locale: validLocale,
    messages: (await import(`./messages/${validLocale}.json`)).default,
  };
});
