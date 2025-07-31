function BookMyTripMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold mb-6">🚌 Book a New Shuttle Trip</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-lg w-full">
        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-lg mb-1">🗺 Select Route</label>
            <select className="w-full p-3 rounded-md bg-slate-100 text-black">
              <option value="">Choose Route</option>
              <option value="route1">Hostel A → Campus Gate (₹30)</option>
              <option value="route2">Admin Block → Hostel C (₹25)</option>
            </select>
          </div>
          <div className="bg-slate-700 text-white p-4 rounded-md shadow">
            <p className="text-sm text-gray-300">💰 Estimated Fare:</p>
            <p className="text-xl font-bold text-green-400">₹30</p> {/* This will be static for now */}
          </div>
          <div>
            <label className="block text-lg mb-1">📅 Select Date</label>
            <input type="date" className="w-full p-3 rounded-md bg-slate-100 text-black" />
          </div>
          <div>
            <label className="block text-lg mb-1">⏰ Select Time</label>
            <input type="time" className="w-full p-3 rounded-md bg-slate-100 text-black" />
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 cursor-pointer rounded-md text-white font-semibold"
            >
              Book Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookMyTripMain;
