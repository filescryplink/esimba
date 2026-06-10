'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import OverviewTab from './components/OverviewTab';
import BrandingTab from './components/BrandingTab';
import OrdersTab from './components/OrdersTab';
import StorefrontTab from './components/StorefrontTab';
import SettingsTab from './components/SettingsTab';

const PartnerPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [hasCheckedRole, setHasCheckedRole] = useState(false);

  useEffect(() => {
    if (hasCheckedRole) return;
    if (status === 'authenticated') {
      setHasCheckedRole(true);
      if (session?.user?.role !== 'partner_admin') {
        router.replace('/');
      }
    } else if (status === 'unauthenticated') {
      setHasCheckedRole(true);
      router.replace('/login');
    }
  }, [status, session, router]);

  if (status === 'loading' || !hasCheckedRole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'partner_admin') {
    return null;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'branding':
        return <BrandingTab />;
      case 'orders':
        return <OrdersTab />;
      case 'storefront':
        return <StorefrontTab />;
      case 'settings':
        return <SettingsTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 mb-2">Partner Dashboard</h1>
        <p className="text-gray-600">Quản lý cửa hàng eSIM của bạn</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-2xl w-fit">
        {[
          { id: 'overview', label: 'Tổng quan' },
          { id: 'branding', label: 'Branding' },
          { id: 'orders', label: 'Orders' },
          { id: 'storefront', label: 'Storefront' },
          { id: 'settings', label: 'Settings' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        {renderTabContent()}
      </div>
    </AdminLayout>
  );
};

export default PartnerPage;
