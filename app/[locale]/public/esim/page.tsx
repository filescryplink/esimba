import { PlanCard } from "@/components/PlanCard";

export default function ESIMPage() {
  const plans = [
    { name: "Mỹ - 5GB", data: "5GB", duration: "30 Ngày", price: 120000 },
    { name: "Nhật Bản - 3GB", data: "3GB", duration: "14 Ngày", price: 210000, featured: true },
    { name: "Châu Âu - 10GB", data: "10GB", duration: "30 Ngày", price: 350000 },
    { name: "Singapore - 2GB", data: "2GB", duration: "7 Ngày", price: 95000 },
    { name: "Thái Lan - 4GB", data: "4GB", duration: "15 Ngày", price: 130000 },
    { name: "Hàn Quốc - 6GB", data: "6GB", duration: "20 Ngày", price: 180000 },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Gói eSIM Quốc tế</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Chọn gói eSIM phù hợp với điểm đến và thời gian đi của bạn</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
}
