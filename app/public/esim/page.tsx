export default function EsimPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Chọn Gói eSIM</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { country: "United States", data: "5GB", days: 30, price: "$12" },
            { country: "Japan", data: "3GB", days: 14, price: "$10" },
            { country: "Vietnam", data: "10GB", days: 30, price: "$8" },
          ].map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-semibold mb-2">{plan.country}</h2>
              <p className="text-gray-600 mb-4">{plan.data} • {plan.days} Ngày</p>
              <p className="text-3xl font-bold text-blue-600 mb-4">{plan.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Mua Ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
