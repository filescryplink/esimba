export default function OverviewTab() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Tổng quan cửa hàng</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
          <p className="text-sm font-semibold text-gray-600 mb-2">Tổng đơn hàng</p>
          <p className="text-4xl font-black text-gray-900">45</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
          <p className="text-sm font-semibold text-gray-600 mb-2">Doanh thu</p>
          <p className="text-4xl font-black text-gray-900">2.1M</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-2xl border border-yellow-100">
          <p className="text-sm font-semibold text-gray-600 mb-2">Khách hàng</p>
          <p className="text-4xl font-black text-gray-900">89</p>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-2xl border border-purple-100">
          <p className="text-sm font-semibold text-gray-600 mb-2">Đánh giá</p>
          <p className="text-4xl font-black text-gray-900">4.8</p>
        </div>
      </div>
    </div>
  );
}
