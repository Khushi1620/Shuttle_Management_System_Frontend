import AdminDashboardMain from "../utilityAdmin/AdminDashboardMain";
import HeaderAdmin from "../utilityAdmin/headerAdmin";
import SidebarAdmin from "../utilityAdmin/sidebarAdmin";

function AdminDashboard() {
    return (
   <div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderAdmin></HeaderAdmin>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarAdmin></SidebarAdmin>
        <AdminDashboardMain></AdminDashboardMain>
         </div>
       </div>
    )
}

export default AdminDashboard;