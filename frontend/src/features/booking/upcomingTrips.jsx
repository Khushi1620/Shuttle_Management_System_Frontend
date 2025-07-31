import HeaderDashboard from "../utilities/headerDashboard";
import SidebarUser from "../utilities/sidebarUser";
import UpcomingTripsMain from "../utilities/upcomingTripsMain";

function UpcomingTrips() {
    return(
        <div className="bg-slate-900 text-white h-screen p-10 gap-2 flex flex-col">
        <HeaderDashboard></HeaderDashboard>
        <div className="flex border-2 border-indigo-500 h-[90%]">
        <SidebarUser></SidebarUser>
        <UpcomingTripsMain></UpcomingTripsMain>
         </div>
       </div>
    )
}

export default UpcomingTrips;