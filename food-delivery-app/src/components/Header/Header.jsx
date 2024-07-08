import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
export const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={assets.header_img} alt="" />

        <div className="header__contents">
          <h2>Order Your Favourite Food...</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            illum esse dolores velit sint commodi? Doloribus, quidem minima. Sit
            unde mollitia magnam corrupti laborum culpa veniam illo porro esse
            ea?
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </div>
  );
};
