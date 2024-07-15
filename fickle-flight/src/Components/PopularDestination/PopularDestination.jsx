import React from "react";
import "./PopularDestination.css";
// import assets here
// import { popularDestinations } from "../assets/assets";

export const PopularDestination = () => {
  return (
    <div className="popularDestination">
      <div className="popularDestination__container">
        <div className="popularDestination__container-title">
          <h3>PLAN YOUR NEXT TRIP</h3>
          <h1>Most Popular Destinations</h1>
        </div>
        <div className="popularDestination__container-title">
          <h3>View all destinations ➡️</h3>
        </div>
      </div>

      {/* <div className="popularDestination__innerContentSection">
        {popularDestinations}
      </div> */}
    </div>
  );
};
