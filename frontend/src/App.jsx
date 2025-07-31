import "./App.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminDashboard from "./features/admin/adminDashboard";
import AdminProfile from "./features/admin/adminProfile";
import ViewUser from "./features/admin/viewUser";
import Login from "./features/authentication/login";
import Register from "./features/authentication/register";
import BookTrip from "./features/booking/bookTrip";
import TripHistory from "./features/booking/tripHistory";
import UpcomingTrips from "./features/booking/upcomingTrips";
import ManageRoutes from "./features/routes/manageRoutes";
import ManageShuttle from "./features/shuttle/manageShuttle";
import TripAnalytics from "./features/trip/tripAnalytics";
import UserDashboard from "./features/user/userDashboard";
import UserProfile from "./features/user/userProfile";
import AdminWalletPage from "./features/wallet/adminWalletPage";
import WalletPage from "./features/wallet/walletPage";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/user/dashboard" element={<UserDashboard></UserDashboard>}></Route>
          <Route path="/user/tripBooking" element={<BookTrip></BookTrip>}></Route>
          <Route path="/user/wallet" element={<WalletPage></WalletPage>}></Route>
          <Route path="/user/tripHistory" element={<TripHistory></TripHistory>}></Route>
          <Route path="/user/upcomingTrips" element={<UpcomingTrips></UpcomingTrips>}></Route>
          <Route path="/user/profile" element={<UserProfile></UserProfile>}></Route>
          <Route path="/admin/dashboard" element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path="/admin/tripAnalytics" element={<TripAnalytics></TripAnalytics>}></Route>
          <Route path="/admin/manageRoutes" element={<ManageRoutes></ManageRoutes>}></Route>
          <Route path="/admin/manageShuttles" element={<ManageShuttle></ManageShuttle>}></Route>
          <Route path="/admin/wallet" element={<AdminWalletPage></AdminWalletPage>}></Route>
          <Route path="/admin/profile" element={<AdminProfile></AdminProfile>}></Route>
          <Route path="/admin/viewUser" element={<ViewUser></ViewUser>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
