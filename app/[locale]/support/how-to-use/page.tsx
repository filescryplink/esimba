'use client';
import { useTranslations } from 'next-intl';
import { ContentPage } from "@/components/ContentPage";

export default function HowToUsePage() {
  const t = useTranslations('common.support');
  const steps = t.raw('howToUseSteps');

  return (
    <ContentPage title={t('howToUseTitle')}>
      <div className="prose prose-lg max-w-none">
        {steps.map((step: { title: string; desc: string }, idx: number) => (
          <div key={idx}>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">{step.title}</h3>
            <p className="text-gray-700 mb-6">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
