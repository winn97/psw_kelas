import React from 'react';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Materi from './pages/Materi';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
