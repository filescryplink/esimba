import { ContentPage } from "../../../components/ContentPage";

export default function TermsPage() {
  return (
    <ContentPage title="Điều khoản sử dụng">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Giới thiệu</h2>
      <p className="text-gray-600 mb-6">Chào mừng bạn đến với eSIMba! Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h2>
      <p className="text-gray-600 mb-6">eSIMba cung cấp eSIM quốc tế cho phép bạn kết nối internet ở hơn 185 quốc gia. Bạn có thể mua eSIM thông qua trang web của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Điều khoản mua hàng</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Bạn phải ít nhất 18 tuổi để sử dụng dịch vụ của chúng tôi</li>
        <li>Bạn phải cung cấp thông tin chính xác và đầy đủ</li>
        <li>Bạn chịu trách nhiệm cho mọi hoạt động diễn ra dưới tài khoản của bạn</li>
        <li>Giá cả có thể thay đổi mà không cần báo trước</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Thanh toán</h2>
      <p className="text-gray-600 mb-6">Bạn phải thanh toán đầy đủ cho các gói eSIM đã mua. Chúng tôi chấp nhận các phương thức thanh toán được liệt kê trên trang web. Tất cả thanh toán đều là cuối cùng.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Hoàn trả</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Bạn có thể yêu cầu hoàn trả nếu eSIM chưa được kích hoạt</li>
        <li>Hoàn trả sẽ được xử lý trong vòng 7 ngày làm việc</li>
        <li>Chúng tôi có quyền từ chối hoàn trả nếu eSIM đã được kích hoạt</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quyền và trách nhiệm của bạn</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Sử dụng dịch vụ một cách hợp pháp và phù hợp với các quy định</li>
        <li>Không sử dụng dịch vụ cho các mục đích trái phép</li>
        <li>Không chia sẻ tài khoản của bạn với người khác</li>
        <li>Thông báo ngay cho chúng tôi nếu có truy cập trái phép tài khoản của bạn</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quyền và trách nhiệm của chúng tôi</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Cung cấp dịch vụ như mô tả trên trang web</li>
        <li>Bảo vệ thông tin cá nhân của bạn</li>
        <li>Hỗ trợ khách hàng 24/7</li>
        <li>Quyền tạm ngừng hoặc chấm dứt dịch vụ nếu bạn vi phạm điều khoản</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tuyên bố miễn trừ trách nhiệm</h2>
      <p className="text-gray-600 mb-6">Dịch vụ được cung cấp "như hiện có" mà không có bất kỳ bảo đảm nào, rõ ràng hay ngụ ý. Chúng tôi không đảm bảo rằng dịch vụ sẽ không bị gián đoạn hoặc không có lỗi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Giới hạn trách nhiệm</h2>
      <p className="text-gray-600 mb-6">Trong mọi trường hợp, eSIMba không chịu trách nhiệm cho bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hệ quả hay hình phạt nào phát sinh từ việc sử dụng dịch vụ của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Thay đổi điều khoản</h2>
      <p className="text-gray-600 mb-6">Chúng tôi có thể cập nhật các điều khoản này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng điều khoản mới trên trang web của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Luật áp dụng</h2>
      <p className="text-gray-600 mb-6">Các điều khoản này sẽ được quản lý và giải thích theo luật Việt Nam.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Liên hệ</h2>
      <p className="text-gray-600">Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi qua email: support@esimba.online</p>
    </ContentPage>
  );
}
