'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';

export const Footer = () => {
  const t = useTranslations('common.footer');
  
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">eS</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {t('description')}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('products')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/esim" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('esimPlans')}</Link></li>
              {/* Note: /become-partner route doesn't exist yet, keeping as is */}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('support')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/support/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('faq')}</Link></li>
              <li><Link href="/support/how-to-use" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('howToUse')}</Link></li>
              <li><Link href="/support/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">{t('aboutUs')}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('about')}</Link></li>
              <li><Link href="/about/privacy" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('privacy')}</Link></li>
              <li><Link href="/about/terms" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">{t('terms')}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            {t('copyright', { year })}
          </p>
          <p className="text-sm text-gray-400">
            {t('tagline')}
          </p>
        </div>
      </div>
    </footer>
  );
};
