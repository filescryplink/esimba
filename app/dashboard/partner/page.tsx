'use client';

import AdminLayout from '../../../components/AdminLayout';

export default function PartnerPage() {
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-black text-gray-900 mb-8">Tổng quan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                📦
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Đơn hàng</p>
            <p className="text-3xl font-bold text-gray-900">156</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 text-xl">
                👥
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Khách hàng</p>
            <p className="text-3xl font-bold text-gray-900">345</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-xl">
                💰
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-1">Doanh thu</p>
            <p className="text-3xl font-bold text-gray-900">₫5.2M</p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Đơn hàng gần đây</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm font-semibold text-gray-500 border-b border-gray-100">
                  <th className="pb-3">Mã đơn hàng</th>
                  <th className="pb-3">Khách hàng</th>
                  <th className="pb-3">Gói</th>
                  <th className="pb-3">Trạng thái</th>
                  <th className="pb-3">Ngày</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {[1,2,3,4].map((i) => (
                  <tr key={i} className="border-b border-gray-50">
                    <td className="py-4 font-medium">ES{20000 + i}</td>
                    <td className="py-4">customer{i}@email.com</td>
                    <td className="py-4">Nhật Bản - 3GB</td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Hoàn thành
                      </span>
                    </td>
                    <td className="py-4">09/06/2026</td>
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
