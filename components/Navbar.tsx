'use client';

import { Button } from "./Button";

export const Navbar = () => {
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
            <Button href="/esim" size="sm" variant="primary">
              Mua ngay
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
