import { ContentPage } from "../../../components/ContentPage";

export default function HowToUsePage() {
  return (
    <ContentPage title="Cách dùng eSIM">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Kiểm tra thiết bị hỗ trợ eSIM</h2>
      <p className="text-gray-600 mb-6">Trước tiên, hãy đảm bảo thiết bị của bạn hỗ trợ eSIM. Hầu hết các điện thoại hiện đại đều hỗ trợ, nhưng bạn có thể kiểm tra trong cài đặt hoặc hướng dẫn sử dụng của nhà sản xuất.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Mua eSIM</h2>
      <p className="text-gray-600 mb-6">Chọn quốc gia/ khu vực và gói dữ liệu phù hợp với nhu cầu của bạn. Thực hiện thanh toán an toàn với các phương thức thanh toán được hỗ trợ.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Nhận mã QR</h2>
      <p className="text-gray-600 mb-6">Sau khi thanh toán thành công, bạn sẽ nhận được mã QR và hướng dẫn kích hoạt qua email. Lưu ý giữ mã QR này cẩn thận.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kích hoạt eSIM</h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Đối với iPhone:</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
        <li>Mở Cài đặt → Di động → Thêm eSIM</li>
        <li>Chọn "Sử dụng mã QR"</li>
        <li>Quét mã QR bạn nhận được</li>
        <li>Làm theo các bước trên màn hình để hoàn tất</li>
      </ol>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Đối với Android:</h3>
      <ol className="list-decimal list-inside text-gray-600 mb-6 space-y-2">
        <li>Mở Cài đặt → Mạng & Internet → SIM</li>
        <li>Chọn "Thêm eSIM"</li>
        <li>Quét mã QR bạn nhận được</li>
        <li>Làm theo các bước trên màn hình để hoàn tất</li>
      </ol>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Sử dụng eSIM</h2>
      <p className="text-gray-600">Sau khi kích hoạt, eSIM sẽ tự động kết nối khi bạn đến quốc gia đã chọn. Bạn có thể kiểm tra trạng thái kết nối trong cài đặt di động của thiết bị.</p>
      
      <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
        <h3 className="text-xl font-bold text-blue-900 mb-2">Lưu ý quan trọng</h3>
        <ul className="list-disc list-inside text-blue-800 space-y-2">
          <li>Kích hoạt eSIM ngay trước khi khởi hành hoặc khi đến nơi</li>
          <li>Đảm bảo thiết bị có kết nối Wi-Fi để kích hoạt eSIM</li>
          <li>Không xóa eSIM trước khi hết hạn gói dữ liệu</li>
          <li>Nếu gặp vấn đề, hãy liên hệ hỗ trợ 24/7 của chúng tôi</li>
        </ul>
      </div>
    </ContentPage>
  );
}
