import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigateToPlaceOrder = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {food_list.map((item, index) => {
          console.log("cartItems[item._id]: ", cartItems[item._id]);

          if (cartItems[item._id] > 0) {
            console.log("IIFFFcartItems[item._id]: ", cartItems[item._id]);

            return (
              <>
                <div className="cart-items-title cart-items-item">
                  {/* <p>DDSDDS {cartItems[item._id]}</p> */}
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${cartItems[item._id] * item.price}</p>
                  <p
                    className="remove"
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr />
              </>
            );
          } else {
            console.log("ELSEEEE[item._id]: ", cartItems[item._id]);
          }
        })}
        <div className="cart-bottom">
          <div className="card-total">
            <h2>Card Totals</h2>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
            <button onClick={() => navigateToPlaceOrder("/order")}>
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="promo-code">
            <div className="promo-code-content">
              <p>If you have a promo code, Enter it here</p>
              <div className="promo-code-innerContent">
                <input type="text" placeholder="Enter Promo Code" />
                <button>Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
