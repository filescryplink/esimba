import { ContentPage } from "@/components/ContentPage";

export default function FAQPage() {
  const faqs = [
    {
      q: "eSIM là gì?",
      a: "eSIM là SIM điện tử được nhúng sẵn trên thiết bị, thay thế cho SIM vật lý truyền thống. Bạn có thể kích hoạt eSIM qua mạng mà không cần lắp thẻ."
    },
    {
      q: "Thiết bị của tôi có hỗ trợ eSIM không?",
      a: "Hầu hết các thiết bị mới (iPhone 11 trở lên, Samsung S20 trở lên, Google Pixel 4 trở lên) đều hỗ trợ eSIM. Vui lòng kiểm tra thông số kỹ thuật của thiết bị để xác nhận."
    },
    {
      q: "Tôi nhận được eSIM sau khi thanh toán trong bao lâu?",
      a: "Bạn sẽ nhận được QR code và hướng dẫn kích hoạt eSIM ngay lập tức qua email sau khi thanh toán thành công."
    },
    {
      q: "Tôi có thể hoàn trả eSIM không?",
      a: "eSIM không thể hoàn trả sau khi đã kích hoạt. Vui lòng kiểm tra kỹ trước khi mua. Nếu có vấn đề, hãy liên hệ bộ phận hỗ trợ của chúng tôi."
    }
  ];

  return (
    <ContentPage title="Câu hỏi thường gặp">
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-gray-100 pb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
            <p className="text-gray-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
