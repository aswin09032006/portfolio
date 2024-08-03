import React from "react";
import "./navigation_preloader.css";

const NavigationPreloader = ({ routeText }) => {
    return (
      <div className="navigation-preloader">
        <span className="navigation-preloader-text">{routeText}</span>
      </div>
    );
  };

export default NavigationPreloader;
