function ManageShuttleMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white space-y-10">
      <h1 className="text-3xl font-bold">🚌 Manage Shuttles</h1>

      {/* ➕ Add New Shuttle */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">➕ Add New Shuttle</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <input type="text" placeholder="Shuttle Number" className="p-3 rounded-md bg-slate-100 text-black" />
          <input type="number" placeholder="Capacity" className="p-3 rounded-md bg-slate-100 text-black" />
          <select className="p-3 rounded-md bg-slate-100 text-black">
            <option value="">Select Route</option>
            <option>Hostel A → Campus Gate</option>
            <option>Admin Block → Hostel C</option>
          </select>
          <input type="text" placeholder="Driver Name / ID" className="p-3 rounded-md bg-slate-100 text-black" />
        </div>
        <button className="mt-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md text-white font-semibold">
          ➕ Add Shuttle
        </button>
      </div>

      {/* 📋 Existing Shuttles Table */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📋 Existing Shuttles</h2>
        <table className="w-full text-sm text-left text-gray-300">
          <thead>
            <tr className="text-indigo-300 border-b border-indigo-400">
              <th className="py-2">#</th>
              <th className="py-2">Shuttle No</th>
              <th className="py-2">Capacity</th>
              <th className="py-2">Route</th>
              <th className="py-2">Driver</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { number: "S‑101", capacity: 40, route: "Hostel A → Campus Gate", driver: "Raj Singh", status: "Active" },
              { number: "S‑202", capacity: 35, route: "Admin Block → Hostel C", driver: "Priya Mehra", status: "Inactive" },
            ].map((shuttle, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2">{index + 1}</td>
                <td>{shuttle.number}</td>
                <td>{shuttle.capacity}</td>
                <td>{shuttle.route}</td>
                <td>{shuttle.driver}</td>
                <td>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${shuttle.status === "Active" ? "bg-green-600" : "bg-red-600"}`}>
                    {shuttle.status}
                  </span>
                </td>
                <td className="text-right space-x-2">
                  <button className="bg-yellow-500 cursor-pointer px-3 py-1 rounded hover:bg-yellow-600 text-sm">✏️ Edit</button>
                  <button className="bg-red-600 cursor-pointer px-3 py-1 rounded hover:bg-red-700 text-sm">🗑 Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageShuttleMain;
