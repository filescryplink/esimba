import { ContentPage } from "@/components/ContentPage";

export default function HowToUsePage() {
  return (
    <ContentPage title="Hướng dẫn sử dụng eSIM">
      <div className="prose prose-lg max-w-none">
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Kiểm tra hỗ trợ eSIM</h3>
        <p className="text-gray-700 mb-6">
          Trước khi mua, hãy đảm bảo thiết bị của bạn hỗ trợ eSIM và đã mở khóa mạng.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Mua và nhận eSIM</h3>
        <p className="text-gray-700 mb-6">
          Chọn gói eSIM phù hợp, thanh toán và nhận QR code qua email.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Kích hoạt eSIM</h3>
        <p className="text-gray-700 mb-6">
          Quét QR code trên thiết bị của bạn để cài đặt eSIM và kích hoạt gói dữ liệu.
        </p>
      </div>
    </ContentPage>
  );
}
