'use client';

import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

interface MenuItem {
  label: string;
  href: string;
}

const superAdminMenuItems: MenuItem[] = [
  { label: 'Tổng quan', href: '/admin' },
  { label: 'Partner Leads', href: '/admin/partner-leads' },
  { label: 'Partners', href: '/admin/partners' },
  { label: 'Orders', href: '/admin/orders' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Cài đặt', href: '/admin/settings' },
];

const partnerAdminMenuItems: MenuItem[] = [
  { label: 'Tổng quan', href: '/partner' },
  { label: 'Branding', href: '/partner/branding' },
  { label: 'Orders', href: '/partner/orders' },
  { label: 'Storefront', href: '/partner/storefront' },
  { label: 'Cài đặt', href: '/partner/settings' },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    router.push('/login');
    return null;
  }

  const menuItems = session.user.role === 'super_admin' ? superAdminMenuItems : partnerAdminMenuItems;

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static z-50 w-64 bg-gray-900 text-white h-screen overflow-y-auto transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">eSIMba</h1>
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-800"
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-md transition-colors ${
                pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
              onClick={() => setIsMobileSidebarOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <div className="flex items-center gap-3 mb-3">
            {session.user.image && (
              <img
                src={session.user.image}
                alt={session.user.name || ''}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <p className="text-sm font-medium">{session.user.name}</p>
              <p className="text-xs text-gray-400">{session.user.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut()}
            className="w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-gray-800 rounded-md transition-colors"
          >
            Đăng xuất
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Top nav for mobile */}
        <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">eSIMba</h2>
          <button
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        {/* Content */}
        <div className="p-4 lg:p-8 flex-1 bg-gray-50">{children}</div>
      </main>
    </div>
  );
}