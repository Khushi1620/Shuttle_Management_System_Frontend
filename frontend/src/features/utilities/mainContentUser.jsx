function MainContent() {
    return (
      <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar">
        <h1 className="text-3xl font-semibold mb-6">
          Welcome, Khushi 👋👋👋
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-indigo-600 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">Wallet Balance</h2>
            <p className="text-3xl font-bold mt-2">₹1,200</p>
          </div>
          <div className="bg-green-600 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">Upcoming Trips</h2>
            <p className="text-3xl font-bold mt-2">3</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold">Completed Trips</h2>
            <p className="text-3xl font-bold mt-2">10</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Your Upcoming Trips</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-medium">From: Hostel A → Campus Gate</p>
              <p className="text-sm text-gray-400">8:30 AM | 27 July 2025</p>
            </div>
            <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Confirmed</span>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-lg font-medium">From: Hostel B → Admin Block</p>
              <p className="text-sm text-gray-400">10:15 AM | 28 July 2025</p>
            </div>
            <span className="bg-rose-400 px-3 py-1 rounded-full text-sm">Pending</span>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
        <div className="bg-gray-800 p-6 rounded-lg w-full md:w-2/3 shadow-md">
          <p className="mb-2">👩‍🎓 Name: Khushi Gupta</p>
          <p className="mb-2">📧 Email: khushi@university.edu</p>
          <p className="mb-2">🎓 Role: Student</p>
          <p className="mb-2">💰 Wallet: ₹1,200</p>
          <p className="">🕒 Last Trip: 25 July, 4:30 PM</p>
        </div>
      </div>
    );
}

export default MainContent;
