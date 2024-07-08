// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UserEnquiryForm } from "./userEnquiryForm/userEnquiryForm";
import PasswordGenerator from "./randomPasswordGeneratorApp/passwordGenerator";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //Create Arrow function for inputValue
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
  };
  return (
    <>
      <div className="App">
        {/* User Equiry Form - Start */}
        <UserEnquiryForm />
        <div className="container">
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Username</label>
              <input
                name="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                type="text"
                placeholder="Enter Username"
              ></input>
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Enter Password"
              ></input>
            </div>
            <div className="button-group">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
