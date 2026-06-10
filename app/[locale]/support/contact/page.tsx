'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";
import { Button } from "@/components/Button";

export default function ContactPage() {
  const t = useTranslations('common.support');

  return (
    <ContentPage title={t('contactTitle')}>
      <div className="max-w-2xl">
        <p className="text-gray-700 mb-8">
          {t('contactDesc')}
        </p>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">{t('emailSupport')}</h4>
            <p className="text-gray-700">support@esimba.com</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">{t('supportHours')}</h4>
            <p className="text-gray-700">{t('supportHoursValue')}</p>
          </div>
          <Button href="mailto:support@esimba.com" variant="primary">
            {t('sendEmail')}
          </Button>
        </div>
      </div>
    </ContentPage>
  );
}
