import React, { useState } from "react";
import "./ReccHolidays.css";
import { assets } from "../../assets/assets";

export const ReccHolidays = () => {
  const [showAllDestination, setShowAllDestination] = useState(false);

  const handleShowAll = () => {
    setShowAllDestination(true);
    // alert("clicked: ", showAllDestination);
  };
  return (
    <div className="popularDestination">
      <div className="popularDestination__container">
        <div className="popularDestination__container-title">
          <h1>Recommended Holidays</h1>
        </div>
        <div className="popularDestination__container-title">
          <h3 onClick={handleShowAll}>View all holidays ➡️</h3>
        </div>
      </div>

      <div className="reccHolidays__innerContentSection">
        {showAllDestination === true
          ? assets.popularDestinations.map((item, index) => (
              <div className="ReccHolidays_Img" key={index}>
                <img src={item.Image} alt={item.title} />
                <div className="reccHoliday-innerContent">
                  <div>
                    <h4> {item.City}</h4>
                    <p>{item.id}7MG48</p>
                  </div>
                  <div>
                    <h3>${item.Price}</h3>
                  </div>
                </div>
              </div>
            ))
          : assets.popularDestinations.map((item, index) => (
              <div className="ReccHolidays_Img" key={index}>
                <img src={item.Image} alt={item.title} />
                <div className="reccHoliday-innerContent">
                  <div>
                    <h4> {item.City}</h4>
                    <p>{item.id}7MG48</p>
                  </div>
                  <div>
                    <h3>${item.Price}</h3>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
