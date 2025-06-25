import { useState } from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseAuth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";


function SignUp(prop) {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showLoad, setShowLoad] = useState(false)


    function showP() {
        setShowPassword((prev) => {
            return !prev;
        })
    }


    const [signInfo, setSignInfo] = useState({
        Fname: "",
        Lname: "",
        ssn: "",
        email: "",
        password: "",
        cPassword: "",
        phone: ""
    })

    function gatherFunc(event) {
        setSignInfo((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })

    }






    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

    const handleChange = (type, value) => {
        let newDay = day;
        let newMonth = month;
        let newYear = year;

        if (type === 'day') {
            newDay = value;
            setDay(value);
        }
        if (type === 'month') {
            newMonth = value;
            setMonth(value);
        }
        if (type === 'year') {
            newYear = value;
            setYear(value);
        }

        if (newDay && newMonth && newYear) {
            const formattedDate = `${newYear}-${String(newMonth).padStart(2, '0')}-${String(newDay).padStart(2, '0')}`;

        }

        console.log(day, month, year)
    };






    const handleRegister = async (e) => {
        e.preventDefault();
        setShowLoad(true)
        if (signInfo.Fname && signInfo.Lname && signInfo.cPassword && signInfo.email && signInfo.password  && day && year && month) {
            if (signInfo.password == signInfo.cPassword) {
                try {
                    await createUserWithEmailAndPassword(auth, signInfo.email, signInfo.password);
                    const user = auth.currentUser;
                    console.log(user)
                    if (user) {
                        await setDoc(doc(db, "users", user.uid), {
                            Fname: signInfo.Fname,
                            Lname: signInfo.Lname,
                            ssn: signInfo.ssn,
                            email: signInfo.email,
                            password: signInfo.cPassword,
                            cPassword: signInfo.cPassword,
                            accBalance: Number(0),
                            cryptoAddress: "",
                            accountNumber: Math.floor(Math.random() * 10000000000),
                            routingNumber: Math.floor(Math.random() * 10000000000),
                            dateOfBirth: day + "/" + month + "/" + year,
                            phone: signInfo.phone,
                            cryptoAddress: "",
                            history: [
                                {
                                    type: "",
                                    name: "",
                                    amount:"",
                                }
                            ],
                        })
                    }
                    toast.success("registered successfully", { position: 'top-center' })
                    setTimeout(() => {
                        navigate('../login')
                    }, 3000)
                } catch (error) {
                    if(error.message == "Firebase: Error (auth/network-request-failed).") {
                         toast.error("No internet connection", { position: 'top-center' })
                    setShowLoad(false)
                    }else{
                    toast.error(error.message, { position: 'top-center' })
                    setShowLoad(false)
                    }
                }
            } else {
                setShowLoad(false)
                toast.error("passwords do not match", { position: 'top-center' })

            }
        } else {
            setShowLoad(false)
            toast.error("fill in the complete details", { position: 'top-center' })

        }
    }






    return (
        <section>

            <Navbar />
            {showLoad ? <div className="login-loader">
                <span className="loader"></span>
            </div> : ""}
            <div className="sign-up">

                <form className="sign-box" onSubmit={handleRegister} >

                    <h1>Sign Up</h1>

                    <div className="double-input">
                        <div className="sign-input">
                            <p>First Name</p>
                            <input type="text" name="Fname" onChange={gatherFunc} />
                        </div>
                        <div className="sign-input">
                            <p>Last Name</p>
                            <input type="text" name="Lname" onChange={gatherFunc} />
                        </div>
                    </div>

                    {/* <div className="sign-input">
                        <p>Social security Number (SSN)</p>
                        <input type="number" name="ssn" onChange={gatherFunc} />
                    </div> */}




                    <div className="dob-container">
                        <div className="sign-input">
                            <p>Date of birth</p>
                        </div>

                        <select value={day} onChange={(e) => handleChange('day', e.target.value)}>
                            <option value="">Day</option>
                            {days.map(d => <option key={d} value={d}>{d}</option>)}
                        </select>

                        <select value={month} onChange={(e) => handleChange('month', e.target.value)}>
                            <option value="">Month</option>
                            {months.map((m, i) => <option key={i + 1} value={i + 1}>{m}</option>)}
                        </select>

                        <select value={year} onChange={(e) => handleChange('year', e.target.value)}>
                            <option value="">Year</option>
                            {years.map(y => <option key={y} value={y}>{y}</option>)}
                        </select>
                    </div>


                    <div className="sign-input">
                        <p>Email Address</p>
                        <input type="text" name="email" onChange={gatherFunc} />
                    </div>

                    <div className="sign-input">
                        <p>Phone number</p>
                        <input type="text" name="phone" onChange={gatherFunc} placeholder=""/>
                    </div>

                    <div className="double">
                        <div className="sign-input">
                            <p>Password</p>
                            <input type={showPassword ? "text" : "password"} name="password" onChange={gatherFunc} />
                        </div>
                        <div onClick={showP}>
                            {showPassword ? <i className="bi-eye"></i> : <i className="bi-eye-slash"></i>}
                        </div>
                    </div>

                    <div className="double">
                        <div className="sign-input">
                            <p>Confirm password</p>
                            <input type={showPassword ? "text" : "password"} name="cPassword" onChange={gatherFunc} />
                        </div>
                        <div onClick={showP}>
                            {showPassword ? <i className="bi-eye"></i> : <i className="bi-eye-slash"></i>}
                        </div>
                    </div>
                    <NavLink className="whiter" to="../login">Already have an Account? Log in.</NavLink>

                    <button className="sign-btn2 ran">SIGN UP</button>

                </form>
            </div>
        </section>
    )
}

export default SignUp;