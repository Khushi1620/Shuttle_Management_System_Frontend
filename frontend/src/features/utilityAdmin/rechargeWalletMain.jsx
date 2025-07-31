function RechargeWalletMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar text-white space-y-10">

      {/* Heading */}
      <h1 className="text-3xl font-bold">💸 Recharge User Wallet</h1>

      {/* Recharge Form */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md space-y-6 max-w-xl">
        <div>
          <label className="block text-sm mb-1 text-gray-300">📧 Enter User Email</label>
          <input
            type="email"
            placeholder="user@university.edu"
            className="w-full p-3 rounded-md bg-slate-100 text-black"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300">💰 Amount to Recharge</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full p-3 rounded-md bg-slate-100 text-black"
          />
        </div>

        <div className="text-right">
          <button className="bg-green-600 cursor-pointer hover:bg-green-700 px-6 py-2 rounded-md text-white font-semibold transition-all">
            Recharge Wallet
          </button>
        </div>
      </div>

      {/* Example: Recharge History Table (optional dummy UI) */}
      <div className="bg-slate-800 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">📜 Recent Recharges</h2>
        <table className="w-full text-sm text-left text-gray-300">
          <thead>
            <tr className="text-indigo-300 border-b border-indigo-500">
              <th className="py-2">User</th>
              <th className="py-2">Email</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Khushi Gupta</td><td>khushi@university.edu</td><td>₹500</td><td>27 July 2025</td></tr>
            <tr><td>Arjun Mehta</td><td>arjun@university.edu</td><td>₹300</td><td>26 July 2025</td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default RechargeWalletMain;
