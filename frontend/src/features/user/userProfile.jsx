import HeaderDashboard from "../utilities/headerDashboard";
import SidebarUser from "../utilities/sidebarUser";
import UserProfileMain from "../utilities/userProfileMain";

function UserProfile() {
    return (
        <div className="bg-slate-900 text-white h-screen overflow-hidden p-10 gap-2 flex flex-col">
        <HeaderDashboard></HeaderDashboard>
        <div className="flex border-2 border-indigo-500 overflow-y-auto hide-scrollbar">
        <SidebarUser></SidebarUser>
        <UserProfileMain></UserProfileMain>
         </div>
       </div>
    )
}

export default UserProfile;