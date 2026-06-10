import { ContentPage } from "@/components/ContentPage";

export default function TermsPage() {
  return (
    <ContentPage title="Điều khoản sử dụng">
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-6">
          Vui lòng đọc kỹ các điều khoản sử dụng này trước khi sử dụng dịch vụ của eSIMba. Bằng việc truy cập và sử dụng website, bạn đồng ý tuân thủ các điều khoản này.
        </p>
        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Sử dụng dịch vụ</h3>
        <p className="text-gray-700 mb-4">
          Dịch vụ eSIM của eSIMba được cung cấp cho mục đích cá nhân và không thương mại. Bạn không được phép sao chép, phân phối hay sửa đổi bất kỳ nội dung nào trên website mà không có sự đồng ý bằng văn bản của chúng tôi.
        </p>
      </div>
    </ContentPage>
  );
}
