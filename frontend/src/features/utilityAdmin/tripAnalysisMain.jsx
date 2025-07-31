function TripAnalysisMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar space-y-8 text-white">

      {/* Heading */}
      <h1 className="text-3xl font-bold">📊 Trip Analytics Dashboard</h1>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div className="bg-indigo-600 p-4 sm:p-5 rounded-xl shadow-lg">
          <p className="text-sm sm:text-base text-indigo-200">Total Trips</p>
          <h2 className="text-xl sm:text-2xl font-semibold">1,520</h2>
        </div>
        <div className="bg-green-600 p-4 sm:p-5 rounded-xl shadow-lg">
          <p className="text-sm sm:text-base text-green-200">Active Users This Week</p>
          <h2 className="text-xl sm:text-2xl font-semibold">340</h2>
        </div>
        <div className="bg-yellow-500 p-4 sm:p-5 rounded-xl shadow-lg">
          <p className="text-sm sm:text-base text-yellow-100">Total Fare Collected</p>
          <h2 className="text-xl sm:text-2xl font-semibold">₹45,670</h2>
        </div>
        <div className="bg-pink-600 p-4 sm:p-5 rounded-xl shadow-lg">
          <p className="text-sm sm:text-base text-pink-200">Avg Trips Per User</p>
          <h2 className="text-xl sm:text-2xl font-semibold">4.3</h2>
        </div>
      </div>

      {/* Weekly Booking Trends */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">📅 Weekly Booking Trends</h3>
        <div className="flex items-end gap-4 h-36 overflow-x-auto">
          {[5, 7, 6, 4, 8, 3, 6].map((val, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[40px]">
              <div style={{ height: `${val * 15}px` }} className="w-6 bg-indigo-400 rounded-md"></div>
              <p className="text-xs mt-1 text-gray-300">
                {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][idx]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Top Routes Table */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md overflow-x-auto">
        <h3 className="text-xl font-semibold mb-4">🚏 Most Booked Routes</h3>
        <table className="w-full text-sm text-left text-gray-300">
          <thead>
            <tr className="text-indigo-300 border-b border-indigo-400">
              <th className="py-2 pr-4">Route</th>
              <th className="py-2 pr-4">Trips</th>
              <th className="py-2">Revenue</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="py-2 pr-4">Hostel A → Campus Gate</td><td className="py-2 pr-4">342</td><td className="py-2">₹10,260</td></tr>
            <tr><td className="py-2 pr-4">Admin Block → Hostel C</td><td className="py-2 pr-4">289</td><td className="py-2">₹8,670</td></tr>
            <tr><td className="py-2 pr-4">Hostel B → Library</td><td className="py-2 pr-4">210</td><td className="py-2">₹5,900</td></tr>
          </tbody>
        </table>
      </div>

      {/* Completed vs Cancelled */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">✅ Completed vs ❌ Cancelled Trips</h3>
        <div className="flex flex-col sm:flex-row gap-4 text-base sm:text-lg font-medium text-gray-300">
          <div className="flex-1 bg-green-700 p-4 rounded-md text-center">✅ Completed: 1,320</div>
          <div className="flex-1 bg-red-600 p-4 rounded-md text-center">❌ Cancelled: 200</div>
        </div>
      </div>

    </div>
  );
}

export default TripAnalysisMain;
