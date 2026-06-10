'use client';

export default function PartnerOrdersTab() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Đơn hàng</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Khách hàng</th>
                <th className="px-6 py-3">Gói</th>
                <th className="px-6 py-3">Trạng thái</th>
                <th className="px-6 py-3">Giá</th>
                <th className="px-6 py-3">Hoa hồng</th>
                <th className="px-6 py-3">Ngày</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">#122</td>
                <td className="px-6 py-4">mike@example.com</td>
                <td className="px-6 py-4">USA 5GB</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Thành công</span>
                </td>
                <td className="px-6 py-4">$49</td>
                <td className="px-6 py-4">$14.70</td>
                <td className="px-6 py-4">09/06/2025</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">#123</td>
                <td className="px-6 py-4">sarah@example.com</td>
                <td className="px-6 py-4">Europe 3GB</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Đang xử lý</span>
                </td>
                <td className="px-6 py-4">$35</td>
                <td className="px-6 py-4">$10.50</td>
                <td className="px-6 py-4">08/06/2025</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">#124</td>
                <td className="px-6 py-4">john@example.com</td>
                <td className="px-6 py-4">Japan 10GB</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">Hoàn thành</span>
                </td>
                <td className="px-6 py-4">$65</td>
                <td className="px-6 py-4">$19.50</td>
                <td className="px-6 py-4">07/06/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
