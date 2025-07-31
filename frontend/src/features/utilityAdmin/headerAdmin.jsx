import notification from '../../assets/notification.svg';
import user from '../../assets/user.svg';

function HeaderAdmin() {
   return(
    <div className="dashboard_header flex flex-col gap-4">
          <div className="flex justify-between items-center px-5">
            <h1 className='font-semibold text-4xl'>Dashboard</h1>
            <div className='flex gap-10'>
            <img className="invert h-10 w-10" src={notification} alt="" />
            <img className='invert h-10 w-10' src={user} alt="" />
            </div>
          </div>
        </div>
   )
}

export default HeaderAdmin;