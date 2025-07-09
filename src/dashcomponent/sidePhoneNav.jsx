import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { NavLink } from "react-router-dom";
import { auth } from "../firebaseAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DoorBackOutlined, DoorSlidingOutlined } from "@mui/icons-material";

function SidePhoneNav(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()

    const navStyle = {
        transform: props.navOpen ? "translate(0px, 0px)" : "translate(-600px, 0px)",
        background: colors.primary[400],
    }

    const navLinker = {
        color: colors.primary[100],
    }

    const logOut = async () => {
        try {
            await auth.signOut();
            console.log("signed out")
            navigate('..')
            toast.success("logged Out", { position: "top-center" })
        } catch (error) {
            toast.error(error.message, { position: "top-center" })
        }
    }

    return (
        <div className="phone-side-nav" style={navStyle}>
            <div className="cancel" onClick={props.openNav}>
                X
            </div>
            <div className="p-link-container">
                <NavLink to="/dash" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <HomeOutlinedIcon className="phoneI" />
                    <p>Home</p>
                </div>
                </NavLink>
                <NavLink to="/dash/history" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <PeopleOutlinedIcon className="phoneI" />
                    <p>Transaction History</p>
                </div>
                </NavLink>
                {/* <NavLink to="/dash/deposit" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <ContactsOutlinedIcon className="phoneI" />
                    <p>Deposit</p>
                </div>
                </NavLink> */}
                <NavLink to="/dash/withdrawal" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <ReceiptOutlinedIcon className="phoneI" />
                    <p>Withdrawal</p>
                </div></NavLink>
                  <NavLink to="/dash/transfer" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <i className="bi-arrow-left-right"></i>
                    <p>Transfer to FCFG</p>
                </div></NavLink>
                  <NavLink to="/dash/link" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <i className="bi-link"></i>
                    <p>Link to Bank</p>
                </div></NavLink>
                
                <NavLink to="/dash/profile" className="linkor" style={navLinker} onClick={props.openNav}><div className="p-link">
                    <PersonOutlinedIcon className="phoneI" />
                    <p>Profile</p>
                </div></NavLink>
                <div className="p-link" onClick={logOut}>
                    <DoorSlidingOutlined className="phoneI" />
                    <p>Log out</p>
                </div>
            </div>
        </div>
    )
}

export default SidePhoneNav;
