import HeaderAdmin from "../utilityAdmin/headerAdmin";
import ManageRoutesMain from "../utilityAdmin/manageRoutesMain";
import SidebarAdmin from "../utilityAdmin/sidebarAdmin";

function ManageRoutes() {
    return(
<div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderAdmin></HeaderAdmin>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarAdmin></SidebarAdmin>
        <ManageRoutesMain></ManageRoutesMain>
         </div>
       </div>
    )
}

export default ManageRoutes;