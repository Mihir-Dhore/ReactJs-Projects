import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";
export const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delactable array of reciepe,
        enjoy..! from a diverse menu featuring a delactable array of reciepe,
        ENJOY.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          console.log("itemname:", item.menu_name);
          return (
            <div
              onClick={() => {
                setCategory((prev) => {
                  console.log("Previous value:", prev);
                  return prev === item.menu_name ? "All" : item.menu_name; // if prev value is same as item name then set it to all else set it to item name means it will give the value of item name
                });
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};
