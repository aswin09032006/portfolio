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
    const checkCompatibility = () => {
      const screenWidth = window.innerWidth;
      setIsCompatible(screenWidth >= 1200);
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
        <h1 className="not-compatible-text">Aswin's Development Portfolio</h1>
        <h2 className="not-compatible-text">Under Construction</h2>
        <p className="not-compatible-text">
          Welcome to my portfolio! I am currently working on building a showcase for my skills and projects as a web developer. Please check back later for updates!
        </p>
        <p className="not-compatible-text">
          For inquiries, feel free to reach out via email at{' '}
          <a href="mailto:vkawinkanan@gmail.com" className="not-compatible-text" style={{color:"red"}}>vkawinkanan@gmail.com</a>.
        </p>
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
