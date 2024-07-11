import React from "react";
import "./RecentSearches.css";
import { assets } from "../../assets/assets";
export const RecentSearches = () => {
  return (
    <div className="recent-searches">
      <b>Recent Searches</b>

      <div className="recent-searches-container">
        <div className="recent-searches-list">
          <h2>SIN</h2>
          <div className="flight-logo-timing">
            <img src={assets.flight} alt="" />
            <p>
              Depart On:<span>17 July 2024</span>
            </p>
          </div>
          <h2>LAX</h2>
        </div>

        <div className="recent-searches-list">
          <h2>MY</h2>
          <div className="flight-logo-timing">
            <img src={assets.flight} alt="" />
            <p>
              Depart On:<span>17 July 2024</span>
            </p>
          </div>
          <h2>DUB</h2>
        </div>
      </div>
    </div>
  );
};
