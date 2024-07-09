import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
export const AppDownload = () => {
  return (
    <div>
      <div className="app-download" id="app-download">
        <div className="appDownload-content">
          <p>
            For Better Experience Download <br /> Tomato App
          </p>
          <div className="appDownload-icon">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
