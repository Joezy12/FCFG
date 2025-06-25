import { useState } from "react";
import { db, auth } from "../firebaseAuth";
import { addDoc, collection, getDocs, doc, updateDoc, getDoc } from "firebase/firestore";
import app from "../firebaseAuth";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Transfer() {

  const navigate = useNavigate();

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


  const [showLoad, setShowLoad] = useState(false)

  const [amount, setAmount] = useState(0)
  const [btcAddress, setBtcAddress] = useState("")

  const collectionRef = collection(db, "users")

  const [clientId, setClientId] = useState("")

  const [client, setClient] = useState(null)

  useEffect(() => {
    if (client) {
      toast.success("found client", { position: "top-center" })
    }
  }, [client])

  function numberWithComma(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
      x = x.replace(pattern, "$1,$2");
    return x;
  }

  async function getData(event) {
    if (clientId.length > 1) {
      setShowLoad(true)
      getDocs(collectionRef)
        .then((response) => {
          let users = response.docs.map((item) => {
            return { ...item.data(), id: item.id }
          })
          console.log(users)
          let mainUser = users.filter((user) => {
            return user.id == clientId
          })
          setClient(mainUser[0])
          console.log(client)
          setShowLoad(false)
          setTransferState("second")

        })
        .catch((error) => {
          console.log(error.message)
          setShowLoad(false)

        })
    } else {
      toast.error("please provide recepient wallet address", { position: "top-center" })
    }
  }

  async function sendMoney(event) {
    event.preventDefault();
    setShowLoad(true)
    if (client) {
      if (amount && btcAddress) {
        if (userDetails.accBalance >= amount) {
          const docToUpdate = doc(db, "users", client.id);
          updateDoc(docToUpdate, {
            accBalance: Number(client.accBalance) + Number(amount),
            cryptoAddress: btcAddress,
            history: [
              ...client.history,
              {
                type: "credit",
                name: userDetails.Fname,
                amount: amount,
              }
            ]
          })
            .then(() => {
              auth.onAuthStateChanged(async (user) => {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);
                const docToUpdate2 = doc(db, "users", user.uid);
                if (docSnap.exists()) {
                  if (docSnap.data().accBalance >= amount) {
                    updateDoc(docToUpdate2, {
                      accBalance: Number(docSnap.data().accBalance) - Number(amount),

                    })
                  } else {
                    toast.error("insufficient Balance", { position: "top-center" })
                    setShowLoad(false)
                  }
                }
              })
              toast.success("sent Successfully", { position: "top-center" })
              setShowLoad(false)
              setTimeout(() => {
                navigate('..')
              }, 1000)
            })
            .catch((error) => {
              toast.error(error.message, { position: "top-center" })
              setShowLoad(false)
            })
        } else {
          toast.error("insufficient balance", { position: "top-center" })
          setShowLoad(false)
        }
      } else {
        toast.error("please fill in complete details", { position: "top-center" })
        setShowLoad(false)
      }
    } else {
      toast.error("no client found", { position: "top-center" })
      setShowLoad(false)
    }
  }


  const [transferState, setTransferState] = useState("first");

  const page = () => {
    if (transferState == "first") {
      return <div className="transfer-box">
        <h3>Recipient Account</h3>
        <input type="text" placeholder="Enter recipient wallet adrress" onChange={(e) => setClientId(e.target.value)} />
        <select>
          <option>Select Bank</option>
          <option>FCFG</option>
        </select>
        <button onClick={getData}>Next</button>
      </div>
    } else if (transferState == "second") {
      if (client) {
        return <form className="reciepient" onSubmit={sendMoney}>
          <div className="rec-name">
            <h1>{client.Fname}  {client.Lname}</h1>
            <p>{client.accNumber} Balance: {client.accBalance}</p>
          </div>
          <div className="rec-box">
            <h5>Amount</h5>
            <div className="dollar-amount">
              <h1>$</h1>
              <input type="number" placeholder="0 - 1,000,000" onChange={(e) => setAmount(e.target.value)} />
            </div>
          </div>
          <div className="rec-box">
            <h5>Remark</h5>
            <input type="text" placeholder="what is this for" className="for-input" onChange={(e) => setBtcAddress(e.target.value)} />
          </div>
          <button className="sender">Send</button>
        </form>
      } else {
        return <div className="no-rec">
          <h1>NO RECEIPIENT FOUND</h1>
          <button onClick={() => setTransferState("first")}>Go Back</button>
        </div>
      }
    }
  }


  return (
    <section className="transfer">
      {showLoad ? <div className="login-loader">
        <span className="loader"></span>
      </div> : ""}
      <div className="transfer-head">
        <h1>TRANSFER TO FCFG</h1>
      </div>
      {page()}
    </section>
  )
}

export default Transfer;