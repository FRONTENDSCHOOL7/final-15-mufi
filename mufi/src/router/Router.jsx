import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}
