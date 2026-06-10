'use client';

import { useState } from 'react';

interface Lead {
  id: string;
  fullName: string;
  email: string;
  companyName: string;
  contact: string;
  message: string;
  status: 'new' | 'contacted' | 'approved' | 'rejected';
  createdAt: string;
}

export default function AdminPartnerLeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([
    { id: '1', fullName: 'Nguyễn Văn A', email: 'a@example.com', companyName: 'Cty ABC', contact: '0123456789', message: 'Tôi muốn trở thành partner', status: 'new', createdAt: '10/06/2025' },
    { id: '2', fullName: 'Trần Thị B', email: 'b@example.com', companyName: 'Cty XYZ', contact: '0987654321', message: 'Liên hệ tôi về hợp tác', status: 'contacted', createdAt: '09/06/2025' },
    { id: '3', fullName: 'Lê Văn C', email: 'c@example.com', companyName: 'Cty 123', contact: '0112233445', message: 'Đăng ký partner', status: 'approved', createdAt: '08/06/2025' },
  ]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

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

  const handleView = (lead: Lead) => {
    setSelectedLead(lead);
    setShowViewModal(true);
  };

  const handleUpdateStatus = (id: string, status: Lead['status']) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status } : lead));
  };

  return (
    <div>
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
                      <button onClick={() => handleView(lead)} className="text-blue-600 hover:text-blue-800 font-medium">Xem</button>
                      {lead.status === 'new' && (
                        <button onClick={() => handleUpdateStatus(lead.id, 'contacted')} className="text-yellow-600 hover:text-yellow-800 font-medium">Liên hệ</button>
                      )}
                      {lead.status !== 'approved' && lead.status !== 'rejected' && (
                        <button onClick={() => handleUpdateStatus(lead.id, 'approved')} className="text-green-600 hover:text-green-800 font-medium">Duyệt</button>
                      )}
                      {lead.status !== 'rejected' && (
                        <button onClick={() => handleUpdateStatus(lead.id, 'rejected')} className="text-red-600 hover:text-red-800 font-medium">Từ chối</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      {showViewModal && selectedLead && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Chi tiết Partner Lead</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">ID</p>
                <p className="font-medium">#{selectedLead.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Họ tên</p>
                <p className="font-medium">{selectedLead.fullName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{selectedLead.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Số điện thoại</p>
                <p className="font-medium">{selectedLead.contact}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Công ty</p>
                <p className="font-medium">{selectedLead.companyName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tin nhắn</p>
                <p className="text-gray-800">{selectedLead.message}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trạng thái</p>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedLead.status)}`}>
                  {getStatusLabel(selectedLead.status)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ngày tạo</p>
                <p className="font-medium">{selectedLead.createdAt}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowViewModal(false)} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">Đóng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}