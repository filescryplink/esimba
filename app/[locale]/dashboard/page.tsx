'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardHomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    if (hasRedirected) return;

    if (status === 'unauthenticated') {
      setHasRedirected(true);
      router.replace(`/${locale}/dashboard/login`);
    }
  }, [status, router, locale]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              eSIMba
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-medium">
              Chào mừng, {session.user?.email}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
              session.user?.role === 'super_admin' ? 'bg-red-100 text-red-800' : 'bg-purple-100 text-purple-800'
            }`}>
              {session.user?.role === 'super_admin' ? 'Admin' : 'Partner'}
            </span>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Tổng quan</h3>
            <p className="text-gray-600">Xem báo cáo tổng quan hệ thống</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Đơn hàng</h3>
            <p className="text-gray-600">Quản lý đơn hàng của bạn</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Người dùng</h3>
            <p className="text-gray-600">Quản lý người dùng hệ thống</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Cài đặt</h3>
            <p className="text-gray-600">Cấu hình hệ thống</p>
          </div>
        </div>

        {/* Admin-only section */}
        {session.user?.role === 'super_admin' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-red-900 mb-4">Admin Panel</h3>
            <p className="text-red-700">Chỉ admin mới có thể thấy phần này</p>
          </div>
        )}

        {/* Partner-only section */}
        {session.user?.role === 'partner_admin' && (
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
            <h3 className="text-lg font-bold text-purple-900 mb-4">Partner Panel</h3>
            <p className="text-purple-700">Chỉ partner mới có thể thấy phần này</p>
          </div>
        )}
      </div>
    </div>
  );
}
