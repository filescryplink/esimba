export default function WaitingApprovalPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
        <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-4xl mx-auto mb-6">
          ⏳
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Đang chờ phê duyệt</h1>
        <p className="text-gray-600 mb-8">
          Tài khoản của bạn đang được xem xét. Chúng tôi sẽ thông báo cho bạn ngay khi có kết quả.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
        >
          Quay về trang chủ
        </a>
      </div>
    </div>
  );
}
