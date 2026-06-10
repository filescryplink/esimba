'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";

export default function AboutPage() {
  const t = useTranslations('common.about');

  return (
    <ContentPage title={t('title')}>
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          {t('description')}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('missionTitle')}</h3>
        <p className="text-gray-700 mb-6">
          {t('missionDesc')}
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('benefitsTitle')}</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          {t.raw('benefits').map((benefit: string, idx: number) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </div>
    </ContentPage>
  );
}
