'use client';

import { useState } from "react";
import { useTranslations, useLocale, Link } from 'next-intl';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations('Navbar');
  const tSupport = useTranslations('SupportMenu');
  const tAbout = useTranslations('AboutMenu');
  const tLang = useTranslations('Language');

  const languages = [
    { code: 'vi', name: tLang('vi'), flag: '🇻🇳' },
    { code: 'en', name: tLang('en'), flag: '🇬🇧' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{t('brand')}</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/esim" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                {t('esimPlans')}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
            <div className="relative group">
              <Link href="/support/faq" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                {t('support')}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <Link href="/support/faq" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tSupport('faq')}</Link>
                <Link href="/support/how-to-use" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tSupport('howToUse')}</Link>
                <Link href="/support/contact" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tSupport('contact')}</Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                {t('about')}
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <Link href="/about" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tAbout('intro')}</Link>
                <Link href="/about/privacy" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tAbout('privacy')}</Link>
                <Link href="/about/terms" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">{tAbout('terms')}</Link>
              </div>
            </div>
            <Link href="https://app.esimba.online" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">{t('login')}</Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">{languages.find(l => l.code === locale)?.flag}</span>
                <span className="font-medium text-gray-700">{languages.find(l => l.code === locale)?.name}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  {languages.map(lang => (
                    <Link 
                      key={lang.code}
                      href="/"
                      locale={lang.code}
                      onClick={() => setLangMenuOpen(false)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${locale === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </Link>
                  ))}
                </div>
              )}
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
            <Link href="/esim" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-xl transition-colors">{t('esimPlans')}</Link>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{t('support')}</p>
              <Link href="/support/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tSupport('faq')}</Link>
              <Link href="/support/how-to-use" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tSupport('howToUse')}</Link>
              <Link href="/support/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tSupport('contact')}</Link>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">{t('about')}</p>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tAbout('intro')}</Link>
              <Link href="/about/privacy" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tAbout('privacy')}</Link>
              <Link href="/about/terms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">{tAbout('terms')}</Link>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Ngôn ngữ</p>
              <div className="flex gap-2 p-2">
                {languages.map(lang => (
                  <Link 
                    key={lang.code}
                    href="/"
                    locale={lang.code}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-xl transition-colors ${locale === lang.code ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <span>{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <Link href="https://app.esimba.online" className="w-full text-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full transition-colors">{t('login')}</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
