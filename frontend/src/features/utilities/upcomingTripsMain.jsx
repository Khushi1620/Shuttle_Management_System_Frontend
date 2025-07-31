function UpcomingTripsMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar">
      <h1 className="text-3xl font-semibold mb-8">📅 Upcoming Trips</h1>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Hostel A → Campus Gate</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 29 July 2025</p>
            <p>⏰ Time: 09:30 AM</p>
            <p>💰 Fare: ₹30</p>
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-1 rounded text-white font-medium">
              ❌ Cancel Trip
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Admin Block → Hostel C</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 30 July 2025</p>
            <p>⏰ Time: 05:00 PM</p>
            <p>💰 Fare: ₹40</p>
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-1 rounded text-white font-medium">
              ❌ Cancel Trip
            </button>
          </div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Hostel B → Academic Block</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 31 July 2025</p>
            <p>⏰ Time: 08:00 AM</p>
            <p>💰 Fare: ₹35</p>
            <button className="bg-red-600 cursor-pointer hover:bg-red-700 px-4 py-1 rounded text-white font-medium">
              ❌ Cancel Trip
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UpcomingTripsMain;
