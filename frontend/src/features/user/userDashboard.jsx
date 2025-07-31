import HeaderDashboard from "../utilities/headerDashboard";
import MainContent from "../utilities/mainContentUser";
import SidebarUser from "../utilities/sidebarUser";

function UserDashboard() {
    return (
       <div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderDashboard></HeaderDashboard>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarUser></SidebarUser>
         <MainContent></MainContent>
         </div>
       </div>
    )
}

export default UserDashboard;