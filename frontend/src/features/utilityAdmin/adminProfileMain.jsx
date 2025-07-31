function AdminProfileMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white flex justify-center">
      <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-6xl space-y-10">

        {/* 🧑‍💼 Admin Basic Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-[30%]">
            <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center text-5xl ring-4 ring-indigo-400 shadow-lg">
              🧑‍💼
            </div>
            <h2 className="text-2xl font-bold">Admin Name</h2>
            <p className="text-indigo-300 text-sm">Administrator</p>
            <p className="text-gray-400 text-sm">Last Login: 26 July 2025, 10:00 AM</p>
          </div>

          {/* 🔍 Admin Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">📧 Email</p>
              <p className="text-lg font-medium">admin@university.edu</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">🆔 Role</p>
              <p className="text-indigo-300 font-medium">Admin</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">📍 Department</p>
              <p className="text-lg font-medium">Transport Management</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">🕒 Admin Since</p>
              <p className="text-lg font-medium">March 2023</p>
            </div>
          </div>
        </div>

        {/* 📊 Summary Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-600 p-5 rounded-xl shadow-lg">
            <p className="text-sm text-indigo-200">Total Users</p>
            <h2 className="text-2xl font-semibold">1,250</h2>
          </div>
          <div className="bg-green-600 p-5 rounded-xl shadow-lg">
            <p className="text-sm text-green-200">Total Trips</p>
            <h2 className="text-2xl font-semibold">3,520</h2>
          </div>
          <div className="bg-yellow-500 p-5 rounded-xl shadow-lg">
            <p className="text-sm text-yellow-100">Total Revenue</p>
            <h2 className="text-2xl font-semibold">₹89,500</h2>
          </div>
        </div>

        {/* 🧾 Activity Log */}
        <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-3">
          <h3 className="text-lg font-semibold text-indigo-300 mb-2">🕵️‍♀️ Recent Admin Activities</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Recharged ₹100 to student Aman Kumar</li>
            <li>Updated Shuttle 102 route to Sector 12</li>
            <li>Added new user: priya@university.edu</li>
            <li>Generated monthly revenue report (July)</li>
          </ul>
        </div>

        {/* ⚙️ Quick Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow transition">
            ✏️ Edit Profile
          </button>
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow transition">
            🚪 Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileMain;
