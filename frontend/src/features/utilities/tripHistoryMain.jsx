function TripHistoryMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar">
      <h1 className="text-3xl font-semibold mb-8">📜 Trip History</h1>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Hostel A → Campus Gate</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 24 July 2025</p>
            <p>⏰ Time: 10:00 AM</p>
            <p>💰 Fare: ₹30</p>
            <p className="text-green-400">✅ Completed</p>
          </div>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Admin Block → Hostel C</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 22 July 2025</p>
            <p>⏰ Time: 05:30 PM</p>
            <p>💰 Fare: ₹40</p>
            <p className="text-green-400">✅ Completed</p>
          </div>
        </div>

        {/* Trip Card 3 */}
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">🚌 Hostel B → Admin Block</h2>
          <div className="flex flex-col md:flex-row justify-between text-sm md:text-base">
            <p>📅 Date: 19 July 2025</p>
            <p>⏰ Time: 08:00 AM</p>
            <p>💰 Fare: ₹25</p>
            <p className="text-red-400">❌ Cancelled</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default TripHistoryMain;
