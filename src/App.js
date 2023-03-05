import logo from "./logo.svg";
import "./App.css";
import { Switch } from "@mui/material";
import DashBoard from "./DashBoard/DashBoard";
import MyBookings from "./My Bookings/MyBookings";
import MyAttendance from "./MyAttendance/MyAttendance";
import Support from "./Support/Support";
import Events from "./Events/Events";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp/SignUp";
import Login from "./Login/Login";
<<<<<<< HEAD
import QRScanner from "./QRScanner/QRScanner";
=======
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41

function App() {
  return (
    <>
    {/* <SignUp /> */}
    {/* <Login /> */}
      <Navbar />
      <Routes>
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/MyBooking" element={<MyBookings />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/MyAttendance" element={<MyAttendance />} />
        <Route path="/Support" element={<Support />} />
<<<<<<< HEAD
        <Route path="/QRScanner" element={<QRScanner />} />
=======
>>>>>>> 183c0f784ad99e4b531183155e30e02f820f3f41
      </Routes>
    </>
  );
}

export default App;
