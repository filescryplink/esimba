'use client';

import { useState } from 'react';

export default function AdminOrdersTab() {
  const [orders, setOrders] = useState([
    { id: '1245', customerEmail: 'john@example.com', planCode: 'Global 10GB', paymentStatus: 'paid', fulfillmentStatus: 'completed', createdAt: '10/06/2025' },
    { id: '1244', customerEmail: 'jane@example.com', planCode: 'Europe 5GB', paymentStatus: 'pending', fulfillmentStatus: 'processing', createdAt: '10/06/2025' },
    { id: '1243', customerEmail: 'bob@example.com', planCode: 'USA 2GB', paymentStatus: 'failed', fulfillmentStatus: 'pending', createdAt: '09/06/2025' },
  ]);

  const getPaymentColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'refunded': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentLabel = (status: string) => {
    switch (status) {
      case 'paid': return 'Đã thanh toán';
      case 'pending': return 'Chờ thanh toán';
      case 'failed': return 'Thất bại';
      case 'refunded': return 'Đã hoàn tiền';
      default: return 'Không xác định';
    }
  };

  const getFulfillmentColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFulfillmentLabel = (status: string) => {
    switch (status) {
      case 'completed': return 'Hoàn thành';
      case 'processing': return 'Đang xử lý';
      case 'pending': return 'Chờ xử lý';
      case 'failed': return 'Thất bại';
      default: return 'Không xác định';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Khách hàng</th>
                <th className="px-6 py-3">Gói</th>
                <th className="px-6 py-3">Thanh toán</th>
                <th className="px-6 py-3">Xử lý</th>
                <th className="px-6 py-3">Ngày</th>
                <th className="px-6 py-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-4">#{order.id}</td>
                  <td className="px-6 py-4">{order.customerEmail}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order.planCode}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getPaymentColor(order.paymentStatus)}`}>
                      {getPaymentLabel(order.paymentStatus)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getFulfillmentColor(order.fulfillmentStatus)}`}>
                      {getFulfillmentLabel(order.fulfillmentStatus)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{order.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-600 hover:text-blue-800">Xem</button>
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