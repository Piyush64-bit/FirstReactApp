// src/App.jsx
import React, { useState } from 'react';
import Home from './pages/Home';
import Display from './pages/Display';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {currentPage === 'home' ? (
        <Home goToDisplay={() => setCurrentPage('display')} />
      ) : (
        <Display goToHome={() => setCurrentPage('home')} />
      )}
    </>
  );
};

export default App;
