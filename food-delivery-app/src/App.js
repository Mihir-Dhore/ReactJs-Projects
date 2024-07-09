import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import Routes
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { LoginPopup } from "./components/LoginPopup/LoginPopup";
import { useState } from "react";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin == true ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className="App">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
