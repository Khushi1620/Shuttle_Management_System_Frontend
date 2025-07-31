function ViewUsersMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white space-y-8">

      {/* Heading */}
      <h1 className="text-3xl font-bold">👥 View Registered Users</h1>

      {/* User Table */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-300 min-w-[600px]">
          <thead>
            <tr className="text-indigo-300 border-b border-indigo-400">
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Wallet</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Khushi Gupta", email: "khushi@university.edu", wallet: 1200, role: "Student" },
              { name: "Raj Verma", email: "raj@university.edu", wallet: 980, role: "Student" },
              { name: "Simran Mehta", email: "simran@university.edu", wallet: 400, role: "Student" },
            ].map((user, index) => (
              <tr key={index} className="border-b border-gray-600">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4 text-green-400 font-semibold">₹{user.wallet}</td>
                <td className="py-2 px-4 text-indigo-300">{user.role}</td>
                <td className="py-2 px-4 text-right">
                  <button className="bg-blue-600 cursor-pointer px-3 py-1 rounded hover:bg-blue-700 text-sm">
  👁 View Trips
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

export default ViewUsersMain;
