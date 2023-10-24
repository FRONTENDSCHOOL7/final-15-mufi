import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import SignUpPage from '../pages/signup/SignUpPage';
import ErrorPage from '../pages/errorPage/ErrorPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/errorpage" element={<ErrorPage />} />
    </Routes>
  );
}
