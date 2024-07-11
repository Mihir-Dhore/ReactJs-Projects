import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Search } from "./pages/Search/Search";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        {/* React Router DOM in React JS helps you switch between different pages or sections 
        of your app without refreshing the whole page.*/}
        <Home />
        {/* <Routes>
          <Route path="/" element={} />
          <Route path="/cart" element={<Search />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
