'use client';

import { useState, useEffect } from 'react';
import AdminLayout from '../components/AdminLayout';
import AdminOverviewTab from './components/OverviewTab';
import AdminPartnerLeadsTab from './components/PartnerLeadsTab';
import AdminPartnersTab from './components/PartnersTab';
import AdminOrdersTab from './components/OrdersTab';
import AdminUsersTab from './components/UsersTab';
import AdminSettingsTab from './components/SettingsTab';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
  const { data: session, status } = useSession();
  const router = useRouter();
  const [hasCheckedRole, setHasCheckedRole] = useState(false);

  useEffect(() => {
    if (hasCheckedRole) return;
    if (status === 'authenticated') {
      setHasCheckedRole(true);
      if (session?.user?.role !== 'super_admin') {
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

  if (status === 'loading' || !hasCheckedRole) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session || session.user?.role !== 'super_admin') {
    return null;
  }

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