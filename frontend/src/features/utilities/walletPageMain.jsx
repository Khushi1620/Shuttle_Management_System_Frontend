function WalletPageMain() {
  return (
    <div className="main_container border-l-2 border-indigo-500 w-full p-6 overflow-y-auto hide-scrollbar">
      <h1 className="text-3xl font-semibold mb-8">💼 Wallet Dashboard</h1>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold">Current Balance:</h2>
        <p className="text-green-400 text-3xl mt-2">₹1200</p>
      </div>
      <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">💳 Recharge Wallet</h2>
        <form className="flex flex-col gap-4 max-w-sm">
          <input
            type="number"
            placeholder="Enter amount"
            className="p-3 rounded bg-slate-100 text-black"
          />
          <button
            type="button"
            className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-medium py-2 rounded"
          >
            Recharge
          </button>
        </form>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">📜 Recharge History</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>₹300 recharged on 23 Jul 2025</li>
          <li>₹500 recharged on 20 Jul 2025</li>
          <li>₹200 recharged on 15 Jul 2025</li>
        </ul>
      </div>
    </div>
  );
}

export default WalletPageMain;
