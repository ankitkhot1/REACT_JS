// src/App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import Home from './Home';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ThemeToggle />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
