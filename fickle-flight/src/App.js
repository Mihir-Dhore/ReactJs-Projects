import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Search } from "./pages/Search/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* <Route path="/order" element={<PlaceOrder />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
