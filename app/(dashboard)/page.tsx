export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg p-4">
          <h2 className="text-2xl font-bold mb-8">eSIMba Admin</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="/admin" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Tổng quan
                </a>
              </li>
              <li>
                <a href="/admin/partners" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Partners
                </a>
              </li>
              <li>
                <a href="/admin/orders" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Orders
                </a>
              </li>
              <li>
                <a href="/admin/users" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Users
                </a>
              </li>
              <li>
                <a href="/admin/leads" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Partner Leads
                </a>
              </li>
              <li>
                <a href="/admin/settings" className="block py-2 px-4 rounded hover:bg-gray-100">
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-4">Chào mừng đến với Dashboard!</h1>
          <p className="text-gray-600">Đây là trang quản trị eSIMba.</p>
        </div>
      </div>
    </div>
  );
}
