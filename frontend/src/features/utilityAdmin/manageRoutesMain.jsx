function ManageRoutesMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white space-y-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold">🗺️ Manage Shuttle Routes</h1>

      {/* Add New Route */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold">➕ Add New Route</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Start Location"
            className="p-3 rounded-md bg-slate-100 text-black"
          />
          <input
            type="text"
            placeholder="End Location"
            className="p-3 rounded-md bg-slate-100 text-black"
          />
          <input
            type="number"
            placeholder="Fare (₹)"
            className="p-3 rounded-md bg-slate-100 text-black"
          />
        </div>
        <button className="mt-3 cursor-pointer bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-md text-white font-semibold transition-all">
          ➕ Add Route
        </button>
      </div>

      {/* Existing Routes Table */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📋 Existing Routes</h2>
        <table className="w-full text-sm text-left text-gray-300">
          <thead>
            <tr className="text-indigo-300 border-b border-indigo-400">
              <th className="py-2">#</th>
              <th className="py-2">Start</th>
              <th className="py-2">End</th>
              <th className="py-2">Fare (₹)</th>
              <th className="py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { start: "Hostel A", end: "Campus Gate", fare: 30 },
              { start: "Admin Block", end: "Hostel C", fare: 25 },
              { start: "Library", end: "Cafeteria", fare: 20 },
            ].map((route, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2">{index + 1}</td>
                <td>{route.start}</td>
                <td>{route.end}</td>
                <td>₹{route.fare}</td>
                <td className="text-right space-x-2">
                  <button className="bg-yellow-500 cursor-pointer px-3 py-1 rounded hover:bg-yellow-600 text-sm">
                    ✏️ Edit
                  </button>
                  <button className="bg-red-600 cursor-pointer px-3 py-1 rounded hover:bg-red-700 text-sm">
                    🗑 Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ManageRoutesMain;
