'use client';

import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function PartnersPage() {
  const [partners, setPartners] = useState([
    { id: '1', name: 'Partner 1', slug: 'partner-1', status: 'active', ownerEmail: 'owner1@example.com', createdAt: '01/06/2025' },
    { id: '2', name: 'Partner 2', slug: 'partner-2', status: 'pending', ownerEmail: 'owner2@example.com', createdAt: '05/06/2025' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active': return 'Hoạt động';
      case 'inactive': return 'Không hoạt động';
      case 'pending': return 'Chờ duyệt';
      default: return 'Không xác định';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Partners</h1>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Thêm mới
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Tên</th>
                  <th className="px-6 py-3">Slug</th>
                  <th className="px-6 py-3">Owner</th>
                  <th className="px-6 py-3">Trạng thái</th>
                  <th className="px-6 py-3">Ngày tạo</th>
                  <th className="px-6 py-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {partners.map((partner) => (
                  <tr key={partner.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">#{partner.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{partner.name}</td>
                    <td className="px-6 py-4">{partner.slug}</td>
                    <td className="px-6 py-4">{partner.ownerEmail}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(partner.status)}`}>
                        {getStatusLabel(partner.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">{partner.createdAt}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:text-blue-800">Xem</button>
                        <button className="text-gray-600 hover:text-gray-800">Sửa</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}