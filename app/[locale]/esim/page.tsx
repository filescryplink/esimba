'use client';
import { useTranslations } from 'next-intl';
import { PlanCard } from "@/components/PlanCard";

export default function ESIMPage() {
  const t = useTranslations('common.esimPage');
  const plans = t.raw('plans');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan: { name: string; data: string; duration: string; price: number; featured?: boolean }, idx: number) => (
            <PlanCard
              key={idx}
              name={plan.name}
              data={plan.data}
              duration={plan.duration}
              price={plan.price}
              featured={plan.featured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
