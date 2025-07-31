import '../../ResponsiveCSS/responsive.css';
import dashboard from '../../assets/dashboard.svg';
import shuttles from '../../assets/shuttles.svg';
import routes from '../../assets/routes.svg';
import viewUsers from '../../assets/viewUsers.svg';
import wallet from '../../assets/wallet.svg';
import tripAnalysis from '../../assets/tripAnalysis.svg';
import viewProfile from '../../assets/viewProfile.svg';

function SidebarAdmin() {
    return(
        <div className="sidebar_container relative text-white h-[100%] w-[40%] px-3">
               <div className='flex flex-col gap-2 m-4'>
                <div className='flex items-center gap-1'>
                <img className='invert h-6 w-6' src={dashboard} alt="" />
                <h1 className='fontReduce text-xl font-medium'>Dashboard</h1>
                </div>
                <div className='flex items-center gap-1'>
                <img className='invert h-6 w-6' src={tripAnalysis} alt="" />
                <h1 className='fontReduce text-xl font-medium'>Trip Analysis</h1>
                </div>
                <div className='flex items-center gap-1'>
                <img className='invert h-6 w-6' src={routes} alt="" />
                <h1 className='fontReduce text-xl font-medium'>Manage Routes</h1>
                </div>
                <div className='flex items-center gap-1'>
                <img className='invert h-6 w-6' src={shuttles} alt="" />
                <h1 className='fontReduce text-xl font-medium'>Manage Shuttles</h1>
                </div>
                <div className='flex items-center gap-1'>
                <img className='invert h-6 w-6' src={viewUsers} alt="" />
                <h1 className='fontReduce text-xl font-medium'>View Users</h1>
               </div>
               <div className='flex gap-1 items-center'>
                <img className='invert h-6 w-6' src={wallet} alt="" />
                <h1 className='fontReduce text-xl font-medium'>Recharge wallet</h1>
               </div>
                <div className='flex items-center gap-1'>
                    <img className='invert h-6 w-6' src={viewProfile} alt="" />
                <h1 className='fontReduce text-xl font-medium'>View profile</h1>
                </div>
                <button className="px-10 cursor-pointer absolute bottom-10 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-sm transition">
                    🚪 Logout
                  </button>
                </div> 
            </div>
    )
}

export default SidebarAdmin;