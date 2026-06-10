'use client';

import { useState } from 'react';

export default function AdminUsersTab() {
  const [users, setUsers] = useState([
    { id: '1', email: 'balv.airdrop@gmail.com', name: 'Admin', role: 'super_admin', createdAt: '01/01/2025' },
    { id: '2', email: 'partner1@example.com', name: 'Partner 1', role: 'partner_admin', createdAt: '02/06/2025' },
    { id: '3', email: 'user3@example.com', name: 'User 3', role: 'pending', createdAt: '08/06/2025' },
  ]);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super_admin': return 'bg-red-100 text-red-800';
      case 'partner_admin': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'super_admin': return 'Super Admin';
      case 'partner_admin': return 'Partner Admin';
      case 'pending': return 'Chờ duyệt';
      default: return 'Không xác định';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Tên</th>
                <th className="px-6 py-3">Vai trò</th>
                <th className="px-6 py-3">Ngày tạo</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">#{user.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{user.email}</td>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getRoleColor(user.role)}`}>
                      {getRoleLabel(user.role)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{user.createdAt}</td>
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
  );
}