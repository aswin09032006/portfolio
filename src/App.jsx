import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Readme from "../readme";
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
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        color: '#333',
      },
      title: {
        fontSize: '2.5rem',
        marginBottom: '20px',
      },
      subtitle: {
        fontSize: '1.5rem',
        marginBottom: '10px',
      },
      description: {
        fontSize: '1rem',
        maxWidth: '600px',
        marginBottom: '30px',
        lineHeight: '1.5',
      },
      email: {
        marginTop: '20px',
        fontSize: '1rem',
      },
      link: {
        color: '#007BFF',
        textDecoration: 'none',
      },
      notCompatibleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      },
    };

    return (
      <div style={styles.notCompatibleContainer}>
        <video width="100%" height="auto" autoPlay loop muted className="flatlined-video">
          <source src={flatline} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 style={styles.title}>Aswin's Development Portfolio</h1>
        <h2 style={styles.subtitle}>Under Construction</h2>
        <p style={styles.description}>
          Welcome to my portfolio! I am currently working on building a showcase for my skills and projects as a web developer. Please check back later for updates!
        </p>
        <p style={styles.email}>
          For inquiries, feel free to reach out via email at{' '}
          <a href="mailto:vkawinkanan@gmail.com" style={styles.link}>vkawinkanan@gmail.com</a>.
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
        <Route path="/readme" element={<Readme />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
