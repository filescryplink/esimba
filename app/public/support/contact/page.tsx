import { ContentPage } from "@/components/ContentPage";
import { Button } from "@/components/Button";

export default function ContactPage() {
  return (
    <ContentPage title="Liên hệ hỗ trợ">
      <div className="max-w-2xl">
        <p className="text-gray-700 mb-8">
          Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi qua các kênh dưới đây.
        </p>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">Email hỗ trợ</h4>
            <p className="text-gray-700">support@esimba.com</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h4 className="font-bold text-gray-900 mb-2">Thời gian hỗ trợ</h4>
            <p className="text-gray-700">Thứ 2 - Chủ Nhật: 24/7</p>
          </div>
          <Button href="mailto:support@esimba.com" variant="primary">
            Gửi email ngay
          </Button>
        </div>
      </div>
    </ContentPage>
  );
}
