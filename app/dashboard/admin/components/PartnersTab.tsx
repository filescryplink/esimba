'use client';

import { useState } from 'react';

interface Partner {
  id: string;
  name: string;
  slug: string;
  status: 'active' | 'inactive' | 'pending';
  ownerEmail: string;
  brandName?: string;
  brandColor?: string;
  logoUrl?: string;
  createdAt: string;
}

export default function AdminPartnersTab() {
  const [partners, setPartners] = useState<Partner[]>([
    { id: '1', name: 'Partner 1', slug: 'partner-1', status: 'active', ownerEmail: 'owner1@example.com', createdAt: '01/06/2025' },
    { id: '2', name: 'Partner 2', slug: 'partner-2', status: 'pending', ownerEmail: 'owner2@example.com', createdAt: '05/06/2025' },
  ]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [editPartner, setEditPartner] = useState<Partial<Partner>>({});

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

  const handleView = (partner: Partner) => {
    setSelectedPartner(partner);
    setShowViewModal(true);
  };

  const handleEdit = (partner: Partner) => {
    setSelectedPartner(partner);
    setEditPartner({ ...partner });
    setShowEditModal(true);
  };

  const handleSaveEdit = () => {
    if (!selectedPartner) return;
    setPartners(partners.map(p => p.id === selectedPartner.id ? { ...p, ...editPartner } : p));
    setShowEditModal(false);
    setSelectedPartner(null);
    setEditPartner({});
  };

  const handleUpdateStatus = (id: string, status: Partner['status']) => {
    setPartners(partners.map(p => p.id === id ? { ...p, status } : p));
  };

  return (
    <div>
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
                      <button onClick={() => handleView(partner)} className="text-blue-600 hover:text-blue-800 font-medium">Xem</button>
                      <button onClick={() => handleEdit(partner)} className="text-gray-600 hover:text-gray-800 font-medium">Sửa</button>
                      {partner.status !== 'active' && (
                        <button onClick={() => handleUpdateStatus(partner.id, 'active')} className="text-green-600 hover:text-green-800 font-medium">Kích hoạt</button>
                      )}
                      {partner.status === 'active' && (
                        <button onClick={() => handleUpdateStatus(partner.id, 'inactive')} className="text-red-600 hover:text-red-800 font-medium">Vô hiệu hóa</button>
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
      {showViewModal && selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Chi tiết Partner</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">ID</p>
                <p className="font-medium">#{selectedPartner.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Tên</p>
                <p className="font-medium">{selectedPartner.name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Slug</p>
                <p className="font-medium">{selectedPartner.slug}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Owner Email</p>
                <p className="font-medium">{selectedPartner.ownerEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trạng thái</p>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedPartner.status)}`}>
                  {getStatusLabel(selectedPartner.status)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Ngày tạo</p>
                <p className="font-medium">{selectedPartner.createdAt}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowViewModal(false)} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">Đóng</button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {showEditModal && selectedPartner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Sửa Partner</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                <input 
                  type="text" 
                  value={editPartner.name || ''} 
                  onChange={(e) => setEditPartner({ ...editPartner, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
                <input 
                  type="text" 
                  value={editPartner.slug || ''} 
                  onChange={(e) => setEditPartner({ ...editPartner, slug: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Trạng thái</label>
                <select 
                  value={editPartner.status || ''} 
                  onChange={(e) => setEditPartner({ ...editPartner, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="active">Hoạt động</option>
                  <option value="inactive">Không hoạt động</option>
                  <option value="pending">Chờ duyệt</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => setShowEditModal(false)} className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200">Hủy</button>
              <button onClick={handleSaveEdit} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Lưu</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}