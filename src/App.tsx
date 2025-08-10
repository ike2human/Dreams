import React, { useState } from 'react';
import { Router, useRouter } from './components/Router';
import HomePage from './components/HomePage';
import CarDetail from './components/CarDetail';

const AppContent: React.FC = () => {
  const { currentPage } = useRouter();
  
  switch (currentPage) {
    case 'car-detail':
      return <CarDetail />;
    case 'home':
    default:
      return <HomePage />;
  }
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;