import { Button } from "@/components/Button";
import { PlanCard } from "@/components/PlanCard";

export default function Home() {
  const plans = [
    { name: "Mỹ - 5GB", data: "5GB", duration: "30 Ngày", price: 120000 },
    { name: "Nhật Bản - 3GB", data: "3GB", duration: "14 Ngày", price: 210000, featured: true },
    { name: "Châu Âu - 10GB", data: "10GB", duration: "30 Ngày", price: 350000 },
  ];

  const benefits = [
    { icon: "⚡", title: "Kích hoạt tức thì", desc: "Nhận QR và kích hoạt ngay sau khi thanh toán" },
    { icon: "🌍", title: "185+ quốc gia", desc: "Kết nối ở hầu hết các quốc gia trên thế giới" },
    { icon: "📶", title: "5G/LTE tốc độ cao", desc: "Tốc độ mạng nhanh và ổn định" },
    { icon: "💰", title: "Giá tốt nhất thị trường", desc: "Giá rẻ hơn nhiều so với roaming thông thường" },
  ];

  const howItWorks = [
    { step: "1", title: "Chọn gói eSIM", desc: "Chọn quốc gia/ khu vực và gói dữ liệu phù hợp" },
    { step: "2", title: "Thanh toán", desc: "Thanh toán an toàn với nhiều phương thức" },
    { step: "3", title: "Nhận QR", desc: "Nhận QR code và mã kích hoạt" },
    { step: "4", title: "Sử dụng", desc: "Quét QR và kết nối internet ngay lập tức" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-4bc710356855?q=80&w=2067&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Kết nối ở 185+ quốc gia
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              eSIM Quốc tế, kết nối mọi nơi
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
              Mua eSIM trực tuyến nhanh chóng, sử dụng ngay tại điểm đến. Không cần SIM vật lý, không cần chờ hàng.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/esim" variant="primary" size="lg" className="shadow-2xl">
                <span className="mr-2">🚀</span> Xem gói eSIM
              </Button>
              <Button href="/about" variant="outline" size="lg">
                Về chúng tôi
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Tại sao chọn eSIMba?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Những lợi ích vượt trội chỉ có ở eSIMba</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Cách hoạt động</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Chỉ 4 bước đơn giản để có eSIM</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="text-center p-8">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Gói eSIM phổ biến</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Chọn gói phù hợp với hành trình của bạn</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <PlanCard
                key={idx}
                name={plan.name}
                data={plan.data}
                duration={plan.duration}
                price={plan.price}
                featured={plan.featured}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/esim" variant="outline" size="lg">
              Xem tất cả gói eSIM →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Sẵn sàng cho hành trình tiếp theo?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Mua eSIM ngay hôm nay và nhận ưu đãi đặc biệt 10% cho đơn hàng đầu tiên</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/esim" variant="secondary" size="lg">
              Mua ngay
            </Button>
            <Button href="/support/faq" variant="outline" size="lg">
              Liên hệ hỗ trợ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
