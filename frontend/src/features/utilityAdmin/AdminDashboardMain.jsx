function AdminDashboardMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white space-y-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold">📊 Admin Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-indigo-600 p-5 rounded-xl shadow-lg">
          <p className="text-sm text-indigo-200">Total Users</p>
          <h2 className="text-2xl font-semibold">212</h2>
        </div>
        <div className="bg-green-600 p-5 rounded-xl shadow-lg">
          <p className="text-sm text-green-200">Trips This Month</p>
          <h2 className="text-2xl font-semibold">1,480</h2>
        </div>
        <div className="bg-yellow-500 p-5 rounded-xl shadow-lg">
          <p className="text-sm text-yellow-100">Revenue Collected</p>
          <h2 className="text-2xl font-semibold">₹72,350</h2>
        </div>
        <div className="bg-pink-600 p-5 rounded-xl shadow-lg">
          <p className="text-sm text-pink-200">Total Routes</p>
          <h2 className="text-2xl font-semibold">15</h2>
        </div>
      </div>

      {/* Quick Access Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-semibold mb-2">🛣 Manage Routes</h3>
          <p className="text-gray-300 text-sm">Add, update or delete shuttle routes across campus.</p>
          <button className="mt-2 cursor-pointer px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">Go to Routes</button>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-semibold mb-2">🚐 Manage Shuttles</h3>
          <p className="text-gray-300 text-sm">Update shuttle details or assign drivers.</p>
          <button className="cursor-pointer mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">Go to Shuttles</button>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-2">
          <h3 className="text-lg font-semibold mb-2">👥 View Users</h3>
          <p className="text-gray-300 text-sm">Check user list, trips, and wallet balance.</p>
          <button className="cursor-pointer mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm font-medium">View Users</button>
        </div>
      </div>

      {/* Chart Section (Static Visual for Now) */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">📈 Monthly Trip Overview</h3>
        <div className="flex items-end gap-4 h-36">
          {[12, 19, 17, 23, 30, 25, 21].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div style={{ height: `${val * 4}px` }} className="w-6 bg-indigo-400 rounded-md"></div>
              <p className="text-xs mt-1 text-gray-300">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][idx]}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default AdminDashboardMain;
