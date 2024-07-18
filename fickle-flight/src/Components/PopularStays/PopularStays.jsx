import React from "react";
import "./PopularStays.css";
import { assets } from "../../assets/assets";
export const PopularStays = () => {
  const handleShowAll = () => {
    console.log("show all");
  };
  return (
    <div className="popularDestination">
      <div className="popularDestination__container">
        <div className="popularDestination__container-title">
          <h1>Popular stays</h1>
        </div>
        <div className="popularDestination__container-title">
          <h3 onClick={handleShowAll}>View all Stays ➡️</h3>
        </div>
      </div>
      <div className="popularStays__container-stays">
        {assets.popularDestinations.map((item, index) => {
          return (
            <div className="popularStays_outside">
              <img src={item.Image} alt="" />
              <div className="popularStaysInnerContent">
                <div>
                  <p>Entire Bungalow</p>
                  <h2>{item.City}</h2>
                  <h4>${item.Price}/night</h4>
                  <p className="rating">
                    ⭐4.2 <span>({item.id + 20} reviews)</span>
                  </p>
                </div>
                <div className="mediaIcon">
                  <img src={assets.mediaPlayer} alt="" />
                </div>
              </div>
              <button>MORE DETAILS</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
