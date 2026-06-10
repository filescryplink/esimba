'use client';

import { useState } from 'react';

interface Order {
  id: string;
  customerEmail: string;
  partnerId?: string;
  planCode: string;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  fulfillmentStatus: 'pending' | 'processing' | 'completed' | 'failed';
  vendorOrderNo?: string;
  qrCodeUrl?: string;
  activationCode?: string;
  createdAt: string;
}

export default function AdminOrdersTab() {
  const [orders, setOrders] = useState<Order[]>([
    { id: '1245', customerEmail: 'john@example.com', planCode: 'Global 10GB', paymentStatus: 'paid', fulfillmentStatus: 'completed', createdAt: '10/06/2025' },
    { id: '1244', customerEmail: 'jane@example.com', planCode: 'Europe 5GB', paymentStatus: 'pending', fulfillmentStatus: 'processing', createdAt: '10/06/2025' },
    { id: '1243', customerEmail: 'bob@example.com', planCode: 'USA 2GB', paymentStatus: 'failed', fulfillmentStatus: 'pending', createdAt: '09/06/2025' },
  ]);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

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

  const handleView = (order: Order) => {
    setSelectedOrder(order);
    setShowViewModal(true);
  };

  const handleUpdatePaymentStatus = (id: string, status: Order['paymentStatus']) => {
    setOrders(orders.map(order => order.id === id ? { ...order, paymentStatus: status } : order));
  };

  const handleUpdateFulfillmentStatus = (id: string, status: Order['fulfillmentStatus']) => {
    setOrders(orders.map(order => order.id === id ? { ...order, fulfillmentStatus: status } : order));
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
                    <div className="flex gap-2 flex-wrap">
                      <button onClick={() => handleView(order)} className="text-blue-600 hover:text-blue-800 font-medium">Xem</button>
                      {order.paymentStatus !== 'paid' && order.paymentStatus !== 'refunded' && (
                        <button onClick={() => handleUpdatePaymentStatus(order.id, 'paid')} className="text-green-600 hover:text-green-800 font-medium">Đánh dấu đã thanh toán</button>
                      )}
                      {order.fulfillmentStatus === 'pending' && (
                        <button onClick={() => handleUpdateFulfillmentStatus(order.id, 'processing')} className="text-yellow-600 hover:text-yellow-800 font-medium">Bắt đầu xử lý</button>
                      )}
                      {order.fulfillmentStatus === 'processing' && (
                        <button onClick={() => handleUpdateFulfillmentStatus(order.id, 'completed')} className="text-green-600 hover:text-green-800 font-medium">Hoàn thành</button>
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
      {showViewModal && selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Chi tiết Order</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">ID</p>
                <p className="font-medium">#{selectedOrder.id}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Khách hàng</p>
                <p className="font-medium">{selectedOrder.customerEmail}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Gói</p>
                <p className="font-medium">{selectedOrder.planCode}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trạng thái thanh toán</p>
                <span className={`px-2 py-1 rounded-full text-xs ${getPaymentColor(selectedOrder.paymentStatus)}`}>
                  {getPaymentLabel(selectedOrder.paymentStatus)}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Trạng thái xử lý</p>
                <span className={`px-2 py-1 rounded-full text-xs ${getFulfillmentColor(selectedOrder.fulfillmentStatus)}`}>
                  {getFulfillmentLabel(selectedOrder.fulfillmentStatus)}
                </span>
              </div>
              {selectedOrder.vendorOrderNo && (
                <div>
                  <p className="text-sm text-gray-500">Vendor Order No</p>
                  <p className="font-medium">{selectedOrder.vendorOrderNo}</p>
                </div>
              )}
              {selectedOrder.activationCode && (
                <div>
                  <p className="text-sm text-gray-500">Mã kích hoạt</p>
                  <p className="font-medium font-mono bg-gray-100 px-2 py-1 rounded">{selectedOrder.activationCode}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-500">Ngày tạo</p>
                <p className="font-medium">{selectedOrder.createdAt}</p>
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