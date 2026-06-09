export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-5">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">eS</span>
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">eSIMba</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              eSIM quốc tế giá tốt, kết nối tức thì, không cần SIM vật lý.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Sản phẩm</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/esim" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Gói eSIM</a></li>
              <li><a href="/become-partner" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Đối tác</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Hỗ trợ</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/support/faq" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">FAQ</a></li>
              <li><a href="/support/how-to-use" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Cách dùng</a></li>
              <li><a href="/support/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Về chúng tôi</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Giới thiệu</a></li>
              <li><a href="/about/privacy" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Chính sách bảo mật</a></li>
              <li><a href="/about/terms" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Điều khoản sử dụng</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} eSIMba. Tất cả các quyền được bảo lưu.
          </p>
          <p className="text-sm text-gray-400">
            Kết nối thế giới, đơn giản như chạm ngón tay.
          </p>
        </div>
      </div>
    </footer>
  );
};
