'use client';

export default function PartnerStorefrontTab() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Cửa hàng</h1>
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Liên kết cửa hàng</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value="https://esimba.online/partner/abc123"
                readOnly
                className="flex-1 px-4 py-2 border rounded-lg bg-gray-50"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Sao chép
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Trạng thái cửa hàng</h2>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              <span className="text-green-600 font-medium">Đang hoạt động</span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Gói eSIM được hiển thị</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">USA 5GB</p>
                  <p className="text-sm text-gray-500">$49</p>
                </div>
                <input type="checkbox" checked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Europe 3GB</p>
                  <p className="text-sm text-gray-500">$35</p>
                </div>
                <input type="checkbox" checked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Japan 10GB</p>
                  <p className="text-sm text-gray-500">$65</p>
                </div>
                <input type="checkbox" checked className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Global 15GB</p>
                  <p className="text-sm text-gray-500">$99</p>
                </div>
                <input type="checkbox" className="w-5 h-5" />
              </div>
            </div>
          </div>

          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Lưu thay đổi
          </button>
        </div>
      </div>
    </div>
  );
}
