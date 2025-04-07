import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewDemand from '../pages/demandMgt/ViewDemand';

const MRoutes = () => {
  return (
    
    <Routes>
      <Route path="/demand" element={<ViewDemand />} />
    </Routes>
    
  );
};

export default MRoutes;
