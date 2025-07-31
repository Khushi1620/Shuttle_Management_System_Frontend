function UserProfileMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar flex justify-center">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-6xl space-y-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-[30%]">
            <div className="h-24 w-24 rounded-full bg-indigo-600 flex items-center justify-center text-5xl ring-4 ring-indigo-400 shadow-lg">👤</div>
            <h2 className="text-2xl font-bold">Khushi Gupta</h2>
            <p className="text-indigo-300 text-sm">Student</p>
            <p className="text-gray-400 text-sm">Registered on: 01 April 2025</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">📧 Email</p>
              <p className="text-lg font-medium">khushi@university.edu</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">💰 Wallet Balance</p>
              <p className="text-green-400 font-semibold text-lg">₹1200</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">🧾 Role</p>
              <p className="text-indigo-300 font-medium">Student</p>
            </div>
            <div className="bg-slate-800 p-4 rounded-lg shadow">
              <p className="text-gray-400 text-sm mb-1">🕓 Last Login</p>
              <p className="text-white text-lg">26 July 2025, 9:20 AM</p>
            </div>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">📊 Weekly Booking Activity</h3>
          <div className="flex items-end gap-4 h-36">
            {[3, 5, 2, 4, 6, 1, 3].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div style={{ height: `${val * 20}px` }} className="w-6 bg-indigo-500 rounded-md"></div>
                <p className="text-xs mt-1 text-gray-400">Day {idx + 1}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">💼 Wallet Usage Summary</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Last Recharge: ₹200 on 24 July</li>
              <li>• Total Spent: ₹980</li>
              <li>• Total Recharges: ₹1200</li>
            </ul>
          </div>
          <div className="bg-slate-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">📅 Next Upcoming Trip</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>• Route: Hostel A → Campus Gate</li>
              <li>• Time: 8:30 AM, 28 July</li>
              <li>• Shuttle No: #12</li>
            </ul>
          </div>
        </div>
        <div className="bg-slate-800 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-4">🧾 Recent Trips</h3>
          <ul className="text-sm space-y-3 text-gray-300">
            <li>• 25 July – Admin Block → Hostel C – ₹30</li>
            <li>• 24 July – Hostel A → Campus Gate – ₹30</li>
            <li>• 23 July – Hostel B → Library – ₹20</li>
          </ul>
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-sm transition">
            ✏️ Edit Profile
          </button>
          <button className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm transition">
            🚪 Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default UserProfileMain;
