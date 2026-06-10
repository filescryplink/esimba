'use client';

import { useState } from "react";
import { Button } from "./Button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('vi');
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <a href="/esim" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                Gói eSIM
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div className="relative group">
              <a href="/support/faq" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                Hỗ trợ
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <a href="/support/faq" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">FAQ</a>
                <a href="/support/how-to-use" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Cách dùng</a>
                <a href="/support/contact" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Liên hệ</a>
              </div>
            </div>
            <div className="relative group">
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors flex items-center gap-1">
                Về chúng tôi
                <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <a href="/about" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Giới thiệu</a>
                <a href="/about/privacy" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Chính sách bảo mật</a>
                <a href="/about/terms" className="block px-5 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">Điều khoản sử dụng</a>
              </div>
            </div>
            <a href="https://app.esimba.online" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Đăng nhập</a>
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="text-xl">{languages.find(l => l.code === selectedLang)?.flag}</span>
                <span className="font-medium text-gray-700">{languages.find(l => l.code === selectedLang)?.name}</span>
                <svg className={`w-4 h-4 text-gray-500 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50">
                  {languages.map(lang => (
                    <button 
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors ${selectedLang === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </button>
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
            <a href="/esim" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium rounded-xl transition-colors">Gói eSIM</a>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Hỗ trợ</p>
              <a href="/support/faq" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">FAQ</a>
              <a href="/support/how-to-use" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">Cách dùng</a>
              <a href="/support/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">Liên hệ</a>
            </div>
            <div className="border-t border-gray-100 pt-3">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Về chúng tôi</p>
              <a href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">Giới thiệu</a>
              <a href="/about/privacy" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">Chính sách bảo mật</a>
              <a href="/about/terms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors">Điều khoản</a>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Ngôn ngữ</p>
              <div className="flex gap-2 p-2">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => setSelectedLang(lang.code)}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 border rounded-xl transition-colors ${selectedLang === lang.code ? 'border-blue-600 bg-blue-50 text-blue-600' : 'border-gray-200 hover:bg-gray-50'}`}
                  >
                    <span>{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <a href="https://app.esimba.online" className="w-full text-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-full transition-colors">Đăng nhập</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
