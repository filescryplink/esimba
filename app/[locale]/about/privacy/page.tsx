'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";

export default function PrivacyPage() {
  const t = useTranslations('common.privacy');

  return (
    <ContentPage title={t('title')}>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          {t('description')}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t('infoCollectedTitle')}</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {t.raw('infoCollected').map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </ContentPage>
  );
}
