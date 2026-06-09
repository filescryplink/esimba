import { ContentPage } from "@/components/ContentPage";

export default function PrivacyPage() {
  return (
    <ContentPage title="Chính sách bảo mật">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Giới thiệu</h2>
      <p className="text-gray-600 mb-6">Chính sách bảo mật này giải thích cách eSIMba thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn khi bạn sử dụng dịch vụ của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Thông tin chúng tôi thu thập</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li><strong className="text-gray-900">Thông tin liên hệ:</strong> Tên, email, số điện thoại</li>
        <li><strong className="text-gray-900">Thông tin thanh toán:</strong> Thông tin cần thiết để xử lý thanh toán</li>
        <li><strong className="text-gray-900">Thông tin thiết bị:</strong> Loại thiết bị, hệ điều hành, thông tin eSIM</li>
        <li><strong className="text-gray-900">Dữ liệu sử dụng:</strong> Thông tin về cách bạn sử dụng dịch vụ của chúng tôi</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Cách chúng tôi sử dụng thông tin</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Cung cấp và duy trì dịch vụ</li>
        <li>Xử lý đơn hàng và thanh toán</li>
        <li>Liên hệ với bạn về đơn hàng và dịch vụ</li>
        <li>Cải thiện dịch vụ của chúng tôi</li>
        <li>Tuân thủ các quy định pháp luật</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Bảo vệ thông tin</h2>
      <p className="text-gray-600 mb-6">Chúng tôi sử dụng các biện pháp bảo mật phù hợp để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép, thay đổi, tiết lộ hoặc hủy hoại.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Chia sẻ thông tin</h2>
      <p className="text-gray-600 mb-6">Chúng tôi không bán, trao đổi hay cho thuê thông tin cá nhân của bạn cho bên thứ ba. Chúng tôi có thể chia sẻ thông tin với các đối tác tin cậy để giúp cung cấp dịch vụ của chúng tôi, tuân thủ pháp luật hoặc bảo vệ quyền lợi của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quyền của bạn</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
        <li>Quyền truy cập thông tin cá nhân của bạn</li>
        <li>Quyền sửa đổi thông tin cá nhân của bạn</li>
        <li>Quyền xóa thông tin cá nhân của bạn</li>
        <li>Quyền từ chối sử dụng thông tin cá nhân của bạn</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Thay đổi chính sách</h2>
      <p className="text-gray-600 mb-6">Chúng tôi có thể cập nhật chính sách bảo mật này theo thời gian. Chúng tôi sẽ thông báo cho bạn về bất kỳ thay đổi nào bằng cách đăng chính sách mới trên trang web của chúng tôi.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Liên hệ</h2>
      <p className="text-gray-600">Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật này, vui lòng liên hệ với chúng tôi qua email: support@esimba.online</p>
    </ContentPage>
  );
}
