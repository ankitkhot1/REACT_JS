// src/Home.js
import React from 'react';
import { useTheme } from './ThemeContext';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Welcome to the {theme} mode!</h1>
    </div>
  );
};

export default Home;
