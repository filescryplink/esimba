'use client';

import { useState } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'super_admin' | 'partner_admin' | 'user';
  createdAt: string;
}

export default function UsersTab() {
  const [users, setUsers] = useState<User[]>([
    { id: '1', email: 'balv.airdrop@gmail.com', name: 'Admin', role: 'super_admin', createdAt: '01/01/2025' },
    { id: '2', email: 'vaytaichinh.top@gmail.com', name: 'Lee Finance', role: 'partner_admin', createdAt: '02/06/2025' },
    { id: '3', email: 'user3@example.com', name: 'User 3', role: 'user', createdAt: '08/06/2025' },
  ]);

  const getRoleBadge = (role: string) => {
    const badges = {
      super_admin: 'bg-purple-100 text-purple-800',
      partner_admin: 'bg-blue-100 text-blue-800',
      user: 'bg-gray-100 text-gray-800',
    };
    return badges[role as keyof typeof badges] || badges.user;
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Quản lý người dùng</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Tên</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Email</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Vai trò</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Ngày tạo</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-600">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-4 px-4 text-gray-900 font-medium">{user.name}</td>
                <td className="py-4 px-4 text-gray-600">{user.email}</td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleBadge(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="py-4 px-4 text-gray-600">{user.createdAt}</td>
                <td className="py-4 px-4">
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Xem</button>
                    {user.role === 'user' && (
                      <button className="text-green-600 hover:text-green-800 font-medium text-sm">Kích hoạt Partner</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
