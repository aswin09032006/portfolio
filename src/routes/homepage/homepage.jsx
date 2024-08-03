import React, { useEffect, useState } from "react";
import Contact from '../../components/Contact';
import Description from "../../components/Description/index";
import Preloader from '../../components/Preloader';
import Home from "../../components/Projects";
import Header from '../../components/header/Header';
import Slides from "../../components/slides/Slides";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setLoading(false);
      }, 5000);
    })();
  }, []);

  return (
    <div className="Homepage">
      {loading ? (
        <Preloader />
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
