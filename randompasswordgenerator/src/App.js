// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { LC, NC, SC, UC } from "./Data/PassChar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

function App() {
  //create useState for all Checkbox
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  //For Password length
  const [passlength, setPasslength] = useState(8);
  //To Show Password in input box
  const [showPass, setshowPass] = useState("");
  let createPassword = () => {
    let charSet = "";
    if (uppercase || lowercase || numbers || symbols) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (numbers) charSet += NC;
      if (symbols) charSet += SC;
      // console.log(charSet);
      let password = "";

      for (let i = 0; i < passlength; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length)); //Math.floor:-> if Ans is 4.1 the it make 4  / 5.3 = 5
      }
      console.log(password);
      setshowPass(password);
    } else {
      toast.error("Please select atleast one checkbox...");
    }
  };

  //To Copy Password
  let handleCopyPassword = () => {
    navigator.clipboard.writeText(showPass); //To Copy the Password
    toast.success("Password Copied to Clipboard");
  };
  return (
    <>
      <ToastContainer />
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="content">
          <input type="text" value={showPass} readOnly></input>{" "}
          <button onClick={handleCopyPassword}>copy</button>
        </div>
        <div className="innerContent">
          <p>Password Length</p>{" "}
          <input
            value={passlength}
            min={8}
            max={16}
            onChange={(event) => setPasslength(event.target.value)}
            type="number"
          ></input>
        </div>
        <div className="innerContent">
          <p>Include Uppercase Letters</p>{" "}
          <input
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
            type="checkbox"
          ></input>
        </div>
        <div className="innerContent">
          <p>Include Lower Letters</p>{" "}
          <input
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
            type="checkbox"
          ></input>
        </div>
        <div className="innerContent">
          <p>Include Numbers</p>{" "}
          <input
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
            type="checkbox"
          ></input>
        </div>
        <div className="innerContent">
          <p>Include Symbols</p>{" "}
          <input
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
            type="checkbox"
          ></input>
        </div>
        <div className="passwordButton">
          <button onClick={createPassword}>Generate Password</button>
        </div>
      </div>
    </>
  );
}

export default App;
