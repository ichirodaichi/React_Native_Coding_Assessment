import React, { useState, useEffect } from 'react';
import AppNavigation from './src/Navigation/AppNavigation';

export const usdValue = React.createContext();

const App = () => {
  return (
    <>
      <AppNavigation />
    </>
  );
};

export default App;
