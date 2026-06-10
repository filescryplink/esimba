'use client';

import { signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const superAdminMenuItems = [
    { name: 'Tổng quan', href: '/admin' },
    { name: 'Partner Leads', href: '/admin/leads' },
    { name: 'Partners', href: '/admin/partners' },
    { name: 'Orders', href: '/admin/orders' },
    { name: 'Users', href: '/admin/users' },
    { name: 'Settings', href: '/admin/settings' },
  ];

  const partnerAdminMenuItems = [
    { name: 'Tổng quan', href: '/partner' },
    { name: 'Branding', href: '/partner/branding' },
    { name: 'Orders', href: '/partner/orders' },
    { name: 'Storefront', href: '/partner/storefront' },
    { name: 'Settings', href: '/partner/settings' },
  ];

  const menuItems = session?.user?.role === 'super_admin' 
    ? superAdminMenuItems 
    : partnerAdminMenuItems;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg hidden lg:block">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">eS</span>
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              eSIMba
            </span>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-xl font-medium transition-all ${
                pathname === item.href
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100">
          <div className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer">
            <img
              src={session?.user?.image || ''}
              alt={session?.user?.name || ''}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {session?.user?.name}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {session?.user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full mt-2 px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 rounded-xl hover:bg-red-50 transition-colors"
          >
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-gray-100 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">eS</span>
              </div>
              <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                eSIMba
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img
                src={session?.user?.image || ''}
                alt={session?.user?.name || ''}
                className="w-8 h-8 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 lg:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
