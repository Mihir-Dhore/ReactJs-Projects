import React, { useContext } from "react";
import "./FoodItems.css";
import { assets } from "../../../assets/assets";
import { StoreContext } from "../../../context/StoreContext";
export const FoodItems = ({ id, name, price, description, image }) => {
  //For Add Item Logic
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className="food-item">
      <div className="food-item-img ">
        <img className="food-item-image" src={image} alt="food" />
        {!cartItems[id] ? (
          <img
            onClick={() => addToCart(id)}
            className="add"
            src={assets.add_icon_white}
            alt="addIcon"
          />
        ) : (
          <div className="ProductAdded">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="removeItem"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
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
            onClick={() => removeFromCart(id)}
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
