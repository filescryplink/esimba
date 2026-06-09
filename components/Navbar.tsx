'use client';

import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/esim" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Gói eSIM</a>
            <a href="/partners" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Đối tác</a>
            <a href="/support" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Hỗ trợ</a>
            <a href="https://app.esimba.online" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Đăng nhập</a>
            <Button size="sm" variant="primary">
              Mua ngay
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
