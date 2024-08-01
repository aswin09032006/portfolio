import React, { useEffect, useState } from "react";
import Contact from '../../components/Contact';
import Description from "../../components/Description/index";
import Preloader from '../../components/Preloader'; // Import the Preloader component
import Home from "../../components/Projects";
import Header from '../../components/header/Header';
import Slides from "../../components/slides/Slides";

const Homepage = () => {
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      // Simulate loading delay
      setTimeout(() => {
        setLoading(false); // Set loading to false after the simulated delay
      }, 5000); // Adjust the time as needed
    })();
  }, []);

  return (
    <div className="Homepage">
      {loading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <Header />
          <Description />
          <Home />
          <Slides />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Homepage;
