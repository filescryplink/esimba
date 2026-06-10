import { ContentPage } from "@/components/ContentPage";

export default function PrivacyPage() {
  return (
    <ContentPage title="Chính sách bảo mật">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          eSIMba cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn sử dụng dịch vụ của chúng tôi.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Thông tin chúng tôi thu thập</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Thông tin tài khoản: tên, email, ảnh đại diện</li>
          <li>Thông tin đơn hàng: lịch sử mua hàng, chi tiết đơn hàng</li>
          <li>Thông tin thiết bị: Loại thiết bị, hệ điều hành (dùng để tối ưu hóa dịch vụ)</li>
        </ul>
      </div>
    </ContentPage>
  );
}
