import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
export const Footer = () => {
  return (
    <div className="main">
      <div className="updates">
        <img src={assets.updateBackground} alt="" />
        <div className="updates__container">
          <div className="updates__container-item">
            <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <h1>Get weekly updates</h1>
          </div>
          <div className="updates__container-item-form">
            <form action="">
              <p>Fill in your details to join the party!</p>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer__container">
          <div className="footer_leftSection">
            <img src={assets.logo} alt="" />
            <p>
              Fickle Flight is your one-stop travel portal. We offer hassle free
              flight and hotel bookings. We also have all your flight needs in
              you online shop.
            </p>
            <div className="footerSocialMedia">
              <img src={assets.Twitter} alt="" />
              <img src={assets.Facebook} alt="" />
              <img src={assets.Instagram} alt="" />
            </div>
          </div>
          <div className="footer_rightSection">
            <div className="rightSection-content">
              <h2>Company</h2>
              <ul>
                <li>About us</li>
                <li>News</li>
                <li>Careers</li>
                <li>How we work</li>
              </ul>
            </div>
            <div className="rightSection-content">
              <h2>Support</h2>
              <ul>
                <li>Account</li>
                <li>Support Center</li>
                <li>FAQ</li>
                <li>Accesibilty</li>
              </ul>
            </div>
            <div className="rightSection-content">
              <h2>More</h2>
              <ul>
                <li>Covid Advisory</li>
                <li>Airline Fees</li>
                <li>Tips</li>
                <li>Quarantile Rules</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
