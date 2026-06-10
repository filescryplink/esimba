'use client';

import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import PartnerOverviewTab from './components/OverviewTab';
import PartnerOrdersTab from './components/OrdersTab';
import PartnerBrandingTab from './components/BrandingTab';
import PartnerStorefrontTab from './components/StorefrontTab';
import PartnerSettingsTab from './components/SettingsTab';

const partnerMenuItems = [
  { label: 'Tổng quan', key: 'overview' },
  { label: 'Đơn hàng', key: 'orders' },
  { label: 'Thương hiệu', key: 'branding' },
  { label: 'Cửa hàng', key: 'storefront' },
  { label: 'Cài đặt', key: 'settings' },
];

export default function PartnerPage() {
  const [activeTab, setActiveTab] = useState('overview');

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