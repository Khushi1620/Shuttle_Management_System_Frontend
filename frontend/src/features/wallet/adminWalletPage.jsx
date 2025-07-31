import WalletPageMain from "../utilities/walletPageMain";
import HeaderAdmin from "../utilityAdmin/headerAdmin";
import RechargeWalletMain from "../utilityAdmin/rechargeWalletMain";
import SidebarAdmin from "../utilityAdmin/sidebarAdmin";

function AdminWalletPage() {
return(
<div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderAdmin></HeaderAdmin>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarAdmin></SidebarAdmin>
        <RechargeWalletMain></RechargeWalletMain>
         </div>
       </div>
    )
}

export default AdminWalletPage;