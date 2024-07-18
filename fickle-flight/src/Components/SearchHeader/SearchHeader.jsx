import React from "react";
import "./SearchHeader.css";
import { assets } from "../../assets/assets";
export const SearchHeader = () => {
  return (
    <div className="header">
      <img src={assets.bgImage} alt="bgImage" />
      <div className="header__content">
        <h1 className="title">Where are you off too?</h1>
        <div className="searchFlight">
          <div className="second-section">
            <div className="input-field">
              <label>Departure</label>
              <input type="text" placeholder="Singapore (SIN)" />
            </div>
            <div className="input-field">
              <label>Arrival</label>
              <input type="text" placeholder="Los Angeles (LA)" />
            </div>
            <div className="input-field">
              <label>Date</label>
              <input type="date" />
            </div>
            <button>SEARCH FLIGHT</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};
