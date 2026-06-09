'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    if (!session || session.user.role !== 'super_admin') {
      router.push('/login');
    }
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-8">eSIMba Admin</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/admin" className="block py-2 px-4 rounded bg-blue-100 text-blue-800">
                  Tổng quan
                </a>
              </li>
              <li>
                <a href="/admin/partners" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Partners
                </a>
              </li>
              <li>
                <a href="/admin/orders" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Orders
                </a>
              </li>
              <li>
                <a href="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Users
                </a>
              </li>
              <li>
                <a href="/admin/leads" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Partner Leads
                </a>
              </li>
              <li>
                <a href="/admin/settings" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Tổng quan</h1>
            <div className="flex items-center gap-4">
              <span>{session?.user.name}</span>
              <img
                src={session?.user.image || ''}
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Tổng Orders</h3>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Tổng Partners</h3>
              <p className="text-3xl font-bold">0</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 mb-2">Tổng Users</h3>
              <p className="text-3xl font-bold">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
