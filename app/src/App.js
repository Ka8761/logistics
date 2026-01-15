import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import "./styles/dashboard.css";

/* PUBLIC NAVBAR */
import Navigationbar from './components/Navbar';

/* LOGGED-IN NAVBAR */
import NavLogged from './components/NavLogged.jsx';

/* PAGES */
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPswd from './pages/ForgotPswd';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Track from './pages/Track';

/* DASHBOARD */
import DashboardLayout from './pages/dashboard/DashboardLayer';
import DashboardHome from './pages/dashboard/DashboardHome';
import DashboardShipment from './pages/dashboard/DashboardShipment';
import ProcurementForm from './pages/dashboard/ProcurementForm';
import MyProcurement from './pages/dashboard/MyProcurements';
import PickUpForm from './pages/dashboard/PickUpForm';
import MyPickUps from './pages/dashboard/MyPickUps';
import NewTicket from './pages/dashboard/NewTicket';
import MyTickets from './pages/dashboard/MyTickets';
import ViewTicket from './pages/dashboard/ViewTicket';
import Billing from './pages/dashboard/Billing';
import How from './pages/dashboard/How';
import IdentityVerify from './pages/dashboard/IdentityVerify';
import ChangePassword from './pages/dashboard/ChangePassword';
import EditProfile from './pages/EditProfile';

import ProtectedRoute from './ProtectedRoute';
// import AboutUs from './components/AboutUs';
// import StartShip from './components/StartShip';

function App() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  //const { token } = useSelector((state) => state.user);

  return (
    <BrowserRouter>

      {isLoggedIn ? <NavLogged /> : <Navigationbar />}
{/* {token && <NavLogged />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
         {/* <Route path="/about" element={<AboutUs />} />
          <Route path="/rates" element={<StartShip />} /> */}
        <Route path="/track" element={<Track />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPswd />} />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="shipment" element={<DashboardShipment />} />
          <Route path="procurement-form" element={<ProcurementForm />} />
          <Route path="my-procurements" element={<MyProcurement />} />
          <Route path="pickup-form" element={<PickUpForm />} />
          <Route path="my-pickups" element={<MyPickUps />} />
          <Route path="new-ticket" element={<NewTicket />} />
          <Route path="my-tickets" element={<MyTickets />} />
          <Route path="support" element={<ViewTicket />} />
          <Route path="billing" element={<Billing />} />
          <Route path="how" element={<How />} />

          {/* PROFILE */}
          <Route path="profile">
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="update-password" element={<ChangePassword />} />
            <Route path="address-book" element={<IdentityVerify />} />
            <Route path="kyc" element={<IdentityVerify />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
