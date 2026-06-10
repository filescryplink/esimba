'use client';

import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import AdminOverviewTab from './components/OverviewTab';
import AdminPartnerLeadsTab from './components/PartnerLeadsTab';
import AdminPartnersTab from './components/PartnersTab';
import AdminOrdersTab from './components/OrdersTab';
import AdminUsersTab from './components/UsersTab';
import AdminSettingsTab from './components/SettingsTab';

const adminMenuItems = [
  { label: 'Tổng quan', key: 'overview' },
  { label: 'Partner Leads', key: 'partner-leads' },
  { label: 'Partners', key: 'partners' },
  { label: 'Orders', key: 'orders' },
  { label: 'Users', key: 'users' },
  { label: 'Settings', key: 'settings' },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <AdminOverviewTab />;
      case 'partner-leads':
        return <AdminPartnerLeadsTab />;
      case 'partners':
        return <AdminPartnersTab />;
      case 'orders':
        return <AdminOrdersTab />;
      case 'users':
        return <AdminUsersTab />;
      case 'settings':
        return <AdminSettingsTab />;
      default:
        return <AdminOverviewTab />;
    }
  };

  return (
    <AdminLayout
      menuItems={adminMenuItems}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {renderTabContent()}
    </AdminLayout>
  );
}