import { useState } from "react";
import banks from "./bankData";



function LinkToBank() {
    console.log(banks)

    const [selectedBank, setSelectedBank] = useState([])
    
    const [bankState, setBankState] = useState("selectBank")

    function getBank(e) {
     setSelectedBank(banks[e.target.id])
     setBankState("login")
     console.log(e.target.id)
    }




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
                <div className="log-boxer">
                    <div>
                        <h1>Email</h1>
                        <input type="email" />
                    </div>
                    <div>
                        <h1>Phone Number</h1>
                        <input type="email" />
                    </div>
                    <div>
                        <h1>Password</h1>
                         <input type="password" />
                    </div>
                    <button className="bank-btn">Login</button>
                </div>
            </div>: ""
        }
    }
    return (
        <section className="link-to-bank">
            {showBankState()}
        </section>
    )
}

export default LinkToBank;