import { ContentPage } from "@/components/ContentPage";

export default function AboutPage() {
  return (
    <ContentPage title="Về eSIMba">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          eSIMba là nền tảng trực tuyến hàng đầu cung cấp eSIM quốc tế, giúp bạn kết nối internet mọi lúc mọi nơi mà không cần lo lắng về SIM vật lý hay phí roaming cao.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Sứ mệnh của chúng tôi</h3>
        <p className="text-gray-700 mb-6">
          Chúng tôi tin rằng việc kết nối với thế giới không nên phức tạp và đắt đỏ. Với eSIMba, bạn có thể dễ dàng mua và kích hoạt eSIM chỉ trong vài phút, trước hoặc ngay sau khi đến điểm đến.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lợi thế của eSIM</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Không cần SIM vật lý, giảm rủi ro mất/thay đổi SIM</li>
          <li>Kích hoạt tức thì sau khi thanh toán</li>
          <li>Giá cạnh tranh, thấp hơn nhiều so với roaming truyền thống</li>
          <li>185+ quốc gia và khu vực được hỗ trợ</li>
        </ul>
      </div>
    </ContentPage>
  );
}
