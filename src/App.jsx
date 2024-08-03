import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import flatline from './images/flatline.mp4';
import Contact from "./routes/contact/contact";
import Homepage from "./routes/homepage/homepage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isCompatible, setIsCompatible] = useState(true);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    // Check if the device is compatible (e.g., screen width >= 1024 pixels)
    const checkCompatibility = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1200) {
        setIsCompatible(false);
      } else {
        setIsCompatible(true);
      }
    };

    checkCompatibility();
    window.addEventListener('resize', checkCompatibility);

    return () => window.removeEventListener('resize', checkCompatibility);

  }, []);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('firstVisit', 'false');
      }, 5000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Preloader />;
  }

  if (!isCompatible) {
    return (
      <div className="not-compatible-container">
        <video width="100%" height="auto" autoPlay loop muted className="flatlined-video">
          <source src={flatline} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p className="not-compatible-text">
          Please switch to a device with a screen width greater than 1200 pixels for an optimal experience. This feature will be available on smaller screens soon.
        </p>
        <a href="https://youtu.be/gvyUuxdRdR4?si=gXiR0vbOAH4HLBlq">
          <button className="emotional-support-button">
            Emotional Support
          </button>
        </a>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
