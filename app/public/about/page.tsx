import { ContentPage } from "@/components/ContentPage";

export default function AboutPage() {
  return (
    <ContentPage title="Giới thiệu về eSIMba">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Chúng tôi là ai?</h2>
      <p className="text-gray-600 mb-6">eSIMba là nền tảng cung cấp eSIM quốc tế uy tín, giúp bạn kết nối internet ở hơn 185 quốc gia với chi phí thấp gấp nhiều lần so với roaming thông thường.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh của chúng tôi</h2>
      <p className="text-gray-600 mb-6">Chúng tôi tin rằng mọi người đều nên có thể kết nối internet một cách dễ dàng, nhanh chóng và chi phí hợp lý bất kể họ ở đâu trên thế giới. Với eSIMba, bạn không cần phải lo lắng về việc tìm mua SIM vật lý ở nước ngoài hay trả phí roaming đắt đỏ.</p>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Tại sao chọn eSIMba?</h2>
      <ul className="list-disc list-inside text-gray-600 space-y-3 mb-8">
        <li><strong className="text-gray-900">Giá tốt nhất thị trường:</strong> Chúng tôi cam kết cung cấp giá rẻ nhất so với các đối thủ cạnh tranh</li>
        <li><strong className="text-gray-900">Kết nối tức thì:</strong> Nhận mã QR và kích hoạt ngay sau khi thanh toán</li>
        <li><strong className="text-gray-900">Hỗ trợ 24/7:</strong> Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn bất cứ khi nào</li>
        <li><strong className="text-gray-900">Thanh toán an toàn:</strong> Hỗ trợ nhiều phương thức thanh toán an toàn</li>
        <li><strong className="text-gray-900">185+ quốc gia:</strong> Kết nối ở hầu hết các quốc gia trên thế giới</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Đội ngũ của chúng tôi</h2>
      <p className="text-gray-600 mb-8">Đội ngũ eSIMba gồm những người có nhiều năm kinh nghiệm trong lĩnh vực công nghệ và viễn thông. Chúng tôi luôn nỗ lực để mang đến trải nghiệm tốt nhất cho khách hàng.</p>
      
      <div className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl border border-blue-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Sẵn sàng bắt đầu hành trình?</h3>
        <p className="text-gray-600 mb-6">Khám phá các gói eSIM của chúng tôi và kết nối internet ngay hôm nay!</p>
        <a href="/esim" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl">
          Xem gói eSIM
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </ContentPage>
  );
}
