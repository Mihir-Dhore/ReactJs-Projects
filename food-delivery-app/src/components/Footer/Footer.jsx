import React from "react";
import "./Footer.css";
//Import assests
import { assets } from "../../assets/assets";
export const Footer = () => {
  return (
    <div>
      <div className="footer " id="contact-us">
        <div className="footer-content">
          <div className="footer-contet-left">
            <img src={assets.logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              quos ratione numquam omnis error fugit nisi, asperiores veritatis
              officiis minima aliquid, repudiandae odio et earum obcaecati
              delectus quidem? Provident, ad!
            </p>
            <div className="sociel-media">
              <img src={assets.facebook_icon} alt="facebook" />
              <img src={assets.twitter_icon} alt="twitter" />
              <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
          </div>
          <div className="footer-contet-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="footer-contet-right">
            <h2>GET IN TOUCH</h2>
            <li>+91 958-584-9576</li>
            <li>mihir@gmail.com</li>
          </div>
        </div>
        <hr />
        <p>
          Copyright &copy; 2024 All rights reserved | This template is made by
          @Mihir
        </p>
      </div>
    </div>
  );
};
