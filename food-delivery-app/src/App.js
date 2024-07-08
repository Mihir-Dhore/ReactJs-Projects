import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import Routes
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

import { Cart } from "./pages/Cart/Cart";
import { PlaceOrder } from "./pages/PlaceOrder/PlaceOrder";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
}

export default App;
