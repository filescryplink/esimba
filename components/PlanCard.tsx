'use client';

import { useTranslations } from 'next-intl';
import { Button } from './Button';

interface PlanCardProps {
  name: string;
  data: string;
  duration: string;
  price: number;
  featured?: boolean;
};

export const PlanCard = ({
  name, data, duration, price, featured = false
}: PlanCardProps) => {
  const t = useTranslations('common.planCard');

  return (
    <div className={`
      rounded-3xl p-8 bg-gradient-to-br from-blue-50 to-indigo-50 ${featured ? 'border-2 border-blue-300 shadow-2xl scale-105' : 'border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-blue-200 hover:scale-102 transition-all duration-300'}`}>
      <div className="bg-white rounded-2xl p-6">
        {featured && (
          <div className="inline-block px-4 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            {t('featured')}
          </div>
        )}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-black text-gray-900 mb-2">
          {price.toLocaleString('vi-VN')} <span className="text-xl font-medium text-gray-500">VNĐ</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12" />
            </svg>
            <span className="font-medium">{data}</span>
          </div>
          <div className="mx-2 text-gray-300">•</div>
          <div className="flex items-center gap-1">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{duration}</span>
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t('benefit1')}
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t('benefit2')}
          </li>
          <li className="flex items-center gap-2 text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {t('benefit3')}
          </li>
        </ul>
        <Button variant={featured ? "primary" : "outline"} size="lg" className="w-full">
          {t('cta')}
        </Button>
      </div>
    </div>
  );
};
