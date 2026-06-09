export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">eS</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
            </div>
            <p className="text-gray-600 text-sm">
              eSIM quốc tế giá tốt, kết nối tức thì, không cần SIM vật lý.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Sản phẩm</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/esim" className="text-gray-600 hover:text-blue-600 transition-colors">Gói eSIM</a></li>
              <li><a href="/partners" className="text-gray-600 hover:text-blue-600 transition-colors">Đối tác</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/support" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="/support" className="text-gray-600 hover:text-blue-600 transition-colors">Cách dùng</a></li>
              <li><a href="mailto:support@esimba.online" className="text-gray-600 hover:text-blue-600 transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Về chúng tôi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Giới thiệu</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} eSIMba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
