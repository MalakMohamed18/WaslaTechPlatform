import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ComponentsDemo from '../pages/ComponentsDemo';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/demo" element={<ComponentsDemo />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;