// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Preloader";
import Contact from "./routes/contact/contact";
import Homepage from "./routes/homepage/homepage";

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a 1-second load time for demonstration purposes

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      {loading ? (
        <Preloader route={location.pathname} />
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </div>
  );
};

const WrappedApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default WrappedApp;
