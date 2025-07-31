import AdminProfileMain from "../utilityAdmin/adminProfileMain";
import HeaderAdmin from "../utilityAdmin/headerAdmin";
import SidebarAdmin from "../utilityAdmin/sidebarAdmin";

function AdminProfile() {
return(
<div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderAdmin></HeaderAdmin>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarAdmin></SidebarAdmin>
        <AdminProfileMain></AdminProfileMain>
         </div>
       </div>
    )
}

export default AdminProfile;