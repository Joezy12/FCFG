import "./dashcss.css"
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/Topbar";
import DashBoard from "./scenes/Dashboard";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import SideBar from "./scenes/global/Sidebar";
import Line from "./scenes/Line";
import Team from "./scenes/Team";
import Deposit from "./scenes/deposit/depositIndex";
import SidePhoneNav from "./dashcomponent/sidePhoneNav";
import { useState } from "react";
import Withdrawal from "./scenes/withdrawal/withdrawalIndex";
import Notification from "./scenes/notifications/notificationIndex";
import Profile from "./scenes/profile";
import Transfer from "./component/transfer";
import LinkToBank from "./component/LinkToBank";




function MainPage() {
  const [theme, colorMode] = useMode();
  const [navOpen, setNavOpen] = useState(false);

  function openNav() {
    setNavOpen((prev) => {
      return !prev
    })
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SidePhoneNav navOpen={navOpen} openNav={openNav} />
        <section className="dashboard">
          <SideBar />
          <main className="content">
            <TopBar openNav={openNav} />

            <Routes>
              <Route index element={<DashBoard />} />
              <Route path="/history" element={<Team />} />
              {/* <Route path="/contacts" element={<Contacts/>} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie/>} /> */}
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/withdrawal" element={<Withdrawal />} />
              {/* <Route path="/faq" element={<DashBoard />} /> */}
              {/* <Route path="/geography" element={<Geography/>} /> */}
              <Route path="/notification" element={<Notification />} />
              <Route path="transfer" element={<Transfer />} />
              <Route path="link" element={<LinkToBank />} />
              
            </Routes>
          </main>
        </section>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default MainPage;
