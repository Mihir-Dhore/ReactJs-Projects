import React, { useState } from "react";
import "./PopularDestination.css";
import { assets } from "../../assets/assets";

export const PopularDestination = () => {
  const [showAllDestination, setShowAllDestination] = useState(false);

  const handleShowAll = () => {
    setShowAllDestination(true);
    // alert("clicked: ", showAllDestination);
  };
  return (
    <div className="popularDestination">
      <div className="popularDestination__container">
        <div className="popularDestination__container-title">
          <h3>PLAN YOUR NEXT TRIP</h3>
          <h1>Most Popular Destinations</h1>
        </div>
        <div className="popularDestination__container-title">
          <h3 onClick={handleShowAll}>View all destinations ➡️</h3>
        </div>
      </div>

      <div className="popularDestination__innerContentSection">
        {showAllDestination === true
          ? assets.popularDestinations.map((item, index) => (
              <div className="PopularDestination_Img" key={index}>
                <img src={item.Image} alt={item.title} />
                <div className="PopularDestination_Img-InnerContent">
                  <div className="left-content">
                    <h3>{item.City}</h3>
                  </div>
                  <div className="right-content">
                    <p>From</p>
                    <h1>${item.Price}</h1>
                  </div>
                </div>
              </div>
            ))
          : assets.popularDestinations.slice(0, 4).map((item, index) => (
              <div className="PopularDestination_Img" key={index}>
                <img src={item.Image} alt={item.title} />
                <div className="PopularDestination_Img-InnerContent">
                  <div className="left-content">
                    <h3>{item.City}</h3>
                  </div>
                  <div className="right-content">
                    <p>From</p>
                    <h1>${item.Price}</h1>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
