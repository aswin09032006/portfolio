import React, { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import NavigationPreloader from "./navigation_preloader";

const NavigationHandler = ({ children }) => {
  const [navigating, setNavigating] = useState(false);
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') {
      setNavigating(true);
      const timer = setTimeout(() => setNavigating(false), 1000); // Adjust timeout as needed
      return () => clearTimeout(timer);
    }
  }, [location, navigationType]);

  return (
    <>
      {navigating && <NavigationPreloader routeText="Loading..." />}
      {children}
    </>
  );
};

export default NavigationHandler;
