import React from 'react';

const Readme = () => {
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
      fontSize: '2rem',
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
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Aswin's Development Portfolio</h1>
      <h2 style={styles.subtitle}>Under Construction</h2>
      <p style={styles.description}>
        Welcome to my portfolio! I am currently working on building a showcase for my skills and projects as a web developer. Please check back later for updates!
      </p>
      <p style={styles.email}>
        For inquiries, feel free to reach out via email at{' '}
        <a href="mailto:vkawinkanan@gmail.com" style={styles.link}>vkawinkanan@gmail.com</a>.
      </p>
    </div>
  );
};

export default Readme;
