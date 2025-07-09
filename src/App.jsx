import Homepage from "./component/Homepage";
import { Routes, Route} from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import AboutUs from "./component/aboutus";
import OurServices from "./component/ourservices";
import LegalInformation from "./component/legalInformation";
import Contact from "./component/contact";
import TermOfUse from "./component/termofuse";
import Login from "./component/login";
import SignUp from "./component/signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainPage from "./mainPage";
import Team from "./scenes/Team";
import Line from "./scenes/Line";
import Deposit from "./scenes/deposit/depositIndex";
import Withdrawal from "./scenes/withdrawal/withdrawalIndex";
import Notification from "./scenes/notifications/notificationIndex";
import { ToastContainer } from "react-toastify";
import Profile from "./scenes/profile";
import Admin from "./admin";
import Transfer from "./component/transfer";
import LinkToBank from "./component/LinkToBank";
import Card from "./component/card";




function App() {

  
  
  return (
<section className="app" >

  <Routes>
    <Route index element={<Homepage />} />
    <Route path="aboutUs" element={<AboutUs />} />
    <Route path="services" element={<OurServices/>} />
    <Route path="legal" element={<LegalInformation />} />
    <Route path="contact" element={<Contact />} />
    <Route path="term" element={<TermOfUse />} />
    <Route path="login" element={<Login  />} />
    <Route path="signup" element={<SignUp />} />
    <Route path="admin" element={<Admin />} />
    <Route path="dash" element={<MainPage />} >
        <Route path="history" element={<Team />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="notification" element={<Notification />} />
        <Route path="profile" element={<Profile />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="link" element={<LinkToBank />} />
    </Route>
    

  </Routes>
  <ToastContainer /> 

</section>
  ) 

}


export default App;
