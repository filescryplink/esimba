'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";

export default function TermsPage() {
  const t = useTranslations('common.terms');

  return (
    <ContentPage title={t('title')}>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          {t('description')}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{t('usageTitle')}</h3>
        <p className="text-gray-700 mb-4">
          {t('usageDesc')}
        </p>
      </div>
    </ContentPage>
  );
}
