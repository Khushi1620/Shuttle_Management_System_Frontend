import HeaderAdmin from "../utilityAdmin/headerAdmin";
import SidebarAdmin from "../utilityAdmin/sidebarAdmin";
import ViewUsersMain from "../utilityAdmin/viewUsersMain";

function ViewUser() {
return(
<div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderAdmin></HeaderAdmin>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarAdmin></SidebarAdmin>
        <ViewUsersMain></ViewUsersMain>
         </div>
       </div>
    )
}

export default ViewUser;