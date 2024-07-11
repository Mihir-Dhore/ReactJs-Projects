import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
export const Header = () => {
  return (
    <div className="header">
      <img src={assets.bgImage} alt="bgImage" />
      <div className="header__content">
        <h1>Let's explore & travel the world</h1>
        <p>Find the best destination and the most popular stay</p>
        <div className="searchFlight">
          <div className="first-section">
            <b>SEARCH FLIGHTS</b>
            <div className="radio-button">
              <label>
                <input
                  type="radio"
                  name="flight"
                  id="one-way"
                  value="one-way"
                />
                <span>Return </span>
              </label>

              <label>
                <input
                  type="radio"
                  name="flight"
                  id="one-way"
                  value="one-way"
                />
                <span>One-way </span>
              </label>
            </div>
          </div>
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
