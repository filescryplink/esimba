'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import PartnerOverviewTab from './components/OverviewTab';
import PartnerOrdersTab from './components/OrdersTab';
import PartnerBrandingTab from './components/BrandingTab';
import PartnerStorefrontTab from './components/StorefrontTab';
import PartnerSettingsTab from './components/SettingsTab';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const partnerMenuItems = [
  { label: 'Tổng quan', key: 'overview' },
  { label: 'Đơn hàng', key: 'orders' },
  { label: 'Thương hiệu', key: 'branding' },
  { label: 'Cửa hàng', key: 'storefront' },
  { label: 'Cài đặt', key: 'settings' },
];

export default function PartnerPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { data: session, status } = useSession();
  const router = useRouter();
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <PartnerOverviewTab />;
      case 'orders':
        return <PartnerOrdersTab />;
      case 'branding':
        return <PartnerBrandingTab />;
      case 'storefront':
        return <PartnerStorefrontTab />;
      case 'settings':
        return <PartnerSettingsTab />;
      default:
        return <PartnerOverviewTab />;
    }
  };

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

  return (
    <AdminLayout
      menuItems={partnerMenuItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {renderTabContent()}
    </AdminLayout>
  );
}