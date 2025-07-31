import HeaderDashboard from "../utilities/headerDashboard";
import SidebarUser from "../utilities/sidebarUser";
import TripHistoryMain from "../utilities/tripHistoryMain";

function TripHistory () {
     return (
        <div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderDashboard></HeaderDashboard>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarUser></SidebarUser>
        <TripHistoryMain></TripHistoryMain>
         </div>
       </div>
     )
}

export default TripHistory;