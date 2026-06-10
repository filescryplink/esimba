'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";

export default function FAQPage() {
  const t = useTranslations('common.support');
  const faqs = t.raw('faqs');

  return (
    <ContentPage title={t('faqTitle')}>
      <div className="space-y-8">
        {faqs.map((faq: { q: string; a: string }, idx: number) => (
          <div key={idx} className="border-b border-gray-100 pb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
