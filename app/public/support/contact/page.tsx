'use client';
import { useState } from "react";
import { ContentPage } from "../../../components/ContentPage";
import { Button } from "../../../components/Button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <ContentPage title="Liên hệ">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cảm ơn bạn đã liên hệ!</h2>
          <p className="text-gray-600 mb-8">Chúng tôi sẽ phản hồi lại bạn trong vòng 24 giờ làm việc.</p>
          <Button variant="primary" href="/">Quay về trang chủ</Button>
        </div>
      </ContentPage>
    );
  }

  return (
    <ContentPage title="Liên hệ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 mb-8">Nếu bạn có bất kỳ câu hỏi nào, hãy liên hệ với chúng tôi. Chúng tôi sẵn sàng giúp đỡ 24/7!</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                📧
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">support@esimba.online</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                📱
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Số điện thoại</h3>
                <p className="text-gray-600">+84 123 456 789</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Địa chỉ</h3>
                <p className="text-gray-600">Hà Nội, Việt Nam</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Gửi tin nhắn cho chúng tôi</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Họ tên</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Số điện thoại</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Tin nhắn</label>
              <textarea 
                rows={4} 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>
            
            <Button type="submit" variant="primary" size="lg" className="w-full">Gửi tin nhắn</Button>
          </form>
        </div>
      </div>
    </ContentPage>
  );
}
