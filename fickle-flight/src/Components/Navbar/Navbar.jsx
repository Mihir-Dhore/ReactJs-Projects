import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState("explore");
  return (
    <>
      <div className="navbar-content">
        {/* <div onClick={()=>setActiveTab(true)} className="navbar-left"> */}
        <img className="logo" src={assets.logo} alt="" /> {/* </div> */}
        <ul className="navbar-menu-list">
          <li>
            <Link
              to="/"
              onClick={() => setActiveTab("explore")}
              className={activeTab === "explore" ? "activeTab" : ""}
            >
              Explore
            </Link>
          </li>
          <li>
            <Link
              to="/search"
              onClick={() => setActiveTab("search")}
              className={activeTab === "search" ? "activeTab" : ""}
            >
              Search
            </Link>
          </li>
          <li
            onClick={() => setActiveTab("hotels")}
            className={activeTab === "hotels" ? "activeTab" : ""}
          >
            Hotels
          </li>
          <li
            onClick={() => setActiveTab("offers")}
            className={activeTab === "offers" ? "activeTab" : ""}
          >
            Offers
          </li>
          <div
            onClick={() => setActiveTab(true)}
            className="navbar-not-profile"
          >
            <img
              className="navbar-notification"
              src={assets.notification1}
              alt="Notification"
            />
            <img
              className="navbar-profile"
              src={assets.profile}
              alt="Profile"
            />
          </div>
        </ul>
      </div>
    </>
  );
};
