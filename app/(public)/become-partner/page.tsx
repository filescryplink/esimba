'use client';

import { useState } from 'react';

export default function BecomePartnerPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    contact: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Đăng Ký Trở Thành Partner</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="fullName">
              Họ và tên
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="companyName">
              Tên công ty (nếu có)
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="contact">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="contact"
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Lời nhắn
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-3 py-2 border rounded-lg"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Gửi Đăng Ký
          </button>
        </form>
      </div>
    </div>
  );
}
