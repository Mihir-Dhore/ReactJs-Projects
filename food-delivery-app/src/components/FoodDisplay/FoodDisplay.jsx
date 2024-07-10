import React from "react";
import "./FoodDisplay.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { FoodItems } from "./FoodItems/FoodItems";

export const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <div className="food-display" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            //food_list is in assets/assets.js

            if (category === "All" || item.category === category) {
              return (
                <FoodItems
                  id={index + 1}
                  name={item.name}
                  price={item.price}
                  description={item.description}
                  image={item.image}
                  category={category}
                  // menuCategory={menuCategory}
                />
              );
            } else if (item.category !== category) {
              console.log("Insides");
              <p>No Data</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};
