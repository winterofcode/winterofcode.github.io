import React from "react";
import "./LandingHome.scss";

const LandingHome = () => {
  return (
    <div className="bg-image">
      <div className="mountain-container">
        <div className="mountain-1">
        <img
            src="/LandingPageAssets/Mountain1.png"
            alt="Mountain 1"
          />
        </div>
        <div className="mountain-2">
        <img
            src="/LandingPageAssets/Mountain2.png"
            alt="Mountain 1"
          />
        </div>
      </div>
      <div className="text-container">
        <p>Winter Of Code</p>
      </div> 
    </div>
  );
};

export default LandingHome;
