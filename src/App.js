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
import QRScanner from "./QRScanner/QRScanner";

function App() {
  return (
    <>
    {/* <SignUp /> */}
    {/* <Login /> */}
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Login />} />

        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/MyBooking" element={<MyBookings />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/MyAttendance" element={<MyAttendance />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/QRScanner" element={<QRScanner />} />
      </Routes>
    </>
  );
}

export default App;
