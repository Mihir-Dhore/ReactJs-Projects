import React, { useState } from "react";
import "./FoodItems.css";
import { assets } from "../../../assets/assets";
export const FoodItems = ({ id, name, price, description, image }) => {
  //For Add Item Logic
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img ">
        <img className="food-item-image" src={image} alt="food" />
        {itemCount === 0 ? (
          <img
            onClick={() => setItemCount((prev) => prev + 1)}
            className="add"
            src={assets.add_icon_white}
            alt="addIcon"
          />
        ) : (
          <div className="ProductAdded">
            <img
              onClick={() => setItemCount((prev) => prev - 1)}
              src={assets.remove_icon_red}
              alt="removeItem"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => setItemCount((prev) => prev + 1)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img
            onClick={() => setItemCount((prev) => prev - 1)}
            src={assets.rating_starts}
            alt=""
          />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};
