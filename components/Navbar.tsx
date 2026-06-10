'use client';

import { useState } from "react";
import { useTranslations, useLocale } from 'next-intl';
import { Button } from "./Button";
import { Link } from '@/lib/navigation';

export const Navbar = () => {
  const t = useTranslations('common.nav');
  const locale = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    const path = window.location.pathname;
    const newPath = path.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/esim" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
              {t('esim')}
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                {t('support')}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <Link href="/support/faq" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{t('faq')}</Link>
                <Link href="/support/how-to-use" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{t('howToUse')}</Link>
                <Link href="/support/contact" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{t('contact')}</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                {t('about')}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <Link href="/about" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{t('about')}</Link>
                <Link href="/about/privacy" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Privacy</Link>
                <Link href="/about/terms" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Terms</Link>
              </div>
            </div>
            <a href="https://app.esimba.online" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">{t('login')}</a>
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-full p-1">
              <button
                onClick={() => switchLocale('vi')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${locale === 'vi' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                VI
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            <Link href="/esim" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-xl transition-colors">{t('esim')}</Link>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{t('support')}</p>
              <Link href="/support/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('faq')}</Link>
              <Link href="/support/how-to-use" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('howToUse')}</Link>
              <Link href="/support/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('contact')}</Link>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{t('about')}</p>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('about')}</Link>
              <Link href="/about/privacy" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('privacy')}</Link>
              <Link href="/about/terms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{t('terms')}</Link>
            </div>
            {/* Language Switcher Mobile */}
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Language / Ngôn ngữ</p>
              <div className="flex gap-2 px-4">
                <button
                  onClick={() => { switchLocale('vi'); setIsMenuOpen(false); }}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${locale === 'vi' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  Tiếng Việt
                </button>
                <button
                  onClick={() => { switchLocale('en'); setIsMenuOpen(false); }}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  English
                </button>
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4 flex flex-col gap-3">
              <a href="https://app.esimba.online" target="_blank" rel="noopener noreferrer" className="w-full text-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full transition-colors">{t('login')}</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
