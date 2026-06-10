'use client';

import { useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function PartnerLeadsPage() {
  const [leads, setLeads] = useState([
    { id: '1', fullName: 'Nguyễn Văn A', email: 'a@example.com', companyName: 'Cty ABC', status: 'new', createdAt: '10/06/2025' },
    { id: '2', fullName: 'Trần Thị B', email: 'b@example.com', companyName: 'Cty XYZ', status: 'contacted', createdAt: '09/06/2025' },
    { id: '3', fullName: 'Lê Văn C', email: 'c@example.com', companyName: 'Cty 123', status: 'approved', createdAt: '08/06/2025' },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'Mới';
      case 'contacted': return 'Đã liên hệ';
      case 'approved': return 'Đã duyệt';
      case 'rejected': return 'Từ chối';
      default: return 'Không xác định';
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Partner Leads</h1>
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
                  <th className="px-6 py-3">Họ tên</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Công ty</th>
                  <th className="px-6 py-3">Trạng thái</th>
                  <th className="px-6 py-3">Ngày</th>
                  <th className="px-6 py-3">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {leads.map((lead) => (
                  <tr key={lead.id} className="bg-white border-b hover:bg-gray-50">
                    <td className="px-6 py-4">#{lead.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{lead.fullName}</td>
                    <td className="px-6 py-4">{lead.email}</td>
                    <td className="px-6 py-4">{lead.companyName}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                        {getStatusLabel(lead.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">{lead.createdAt}</td>
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