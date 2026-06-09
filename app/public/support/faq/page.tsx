'use client';
import { useState } from "react";
import { ContentPage } from "@/components/ContentPage";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "eSIM là gì?",
    answer: "eSIM (Embedded SIM) là SIM điện tử được tích hợp trực tiếp vào thiết bị, không cần thẻ SIM vật lý. Bạn chỉ cần quét mã QR để kích hoạt và sử dụng.",
  },
  {
    question: "Thiết bị của tôi có hỗ trợ eSIM không?",
    answer: "Hầu hết các thiết bị hiện đại đều hỗ trợ eSIM: iPhone 11 trở lên, Samsung Galaxy S20 trở lên, Google Pixel 3 trở lên, và nhiều điện thoại Android khác. Bạn có thể kiểm tra trong cài đặt thiết bị của mình.",
  },
  {
    question: "Làm thế nào để kích hoạt eSIM?",
    answer: "Sau khi thanh toán, bạn sẽ nhận được mã QR và hướng dẫn kích hoạt. Chỉ cần quét mã QR bằng điện thoại của mình và làm theo các bước đơn giản.",
  },
  {
    question: "eSIM có thể sử dụng ở bao nhiêu quốc gia?",
    answer: "eSIMba hỗ trợ hơn 185 quốc gia và khu vực trên toàn thế giới. Bạn có thể chọn gói dữ liệu phù hợp với điểm đến của mình.",
  },
  {
    question: "Tôi có thể hoàn trả eSIM không?",
    answer: "Bạn có thể hoàn trả eSIM nếu chưa kích hoạt. Vui lòng liên hệ bộ phận hỗ trợ để được hướng dẫn chi tiết.",
  },
  {
    question: "Thời gian kích hoạt eSIM bao lâu?",
    answer: "eSIM sẽ được kích hoạt tức thì sau khi bạn quét mã QR. Trong một số trường hợp, có thể mất vài phút để kết nối hoàn tất.",
  },
  {
    question: "Tôi cần làm gì nếu eSIM không hoạt động?",
    answer: "Vui lòng kiểm tra kết nối mạng, khởi động lại thiết bị hoặc liên hệ bộ phận hỗ trợ 24/7 của chúng tôi để được giúp đỡ.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ContentPage title="Câu hỏi thường gặp (FAQ)">
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-colors">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{faq.question}</span>
              <svg className={`w-6 h-6 text-blue-600 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </ContentPage>
  );
}
