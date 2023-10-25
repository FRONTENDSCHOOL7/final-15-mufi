import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import SignUpPage from '../pages/signup/SignUpPage';
import Login from '../pages/login/Login';
import JoinProfile from '../pages/login/JoinProfile';
import YourProfile from '../pages/profile/YourProfile';

export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/joinprofile" element={<JoinProfile />} />
      <Route path="/yourprofile" element={<YourProfile />} />
    </Routes>
  );
}
