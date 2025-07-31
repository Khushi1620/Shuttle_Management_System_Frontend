import HeaderDashboard from "../utilities/headerDashboard";
import SidebarUser from "../utilities/sidebarUser";
import WalletPageMain from "../utilities/walletPageMain";

function WalletPage() {
    return (
       <div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderDashboard></HeaderDashboard>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarUser></SidebarUser>
        <WalletPageMain></WalletPageMain>
         </div>
       </div>
    )
}

export default WalletPage;