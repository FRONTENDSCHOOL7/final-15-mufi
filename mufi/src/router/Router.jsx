import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from "../pages/landing/Landing";
 import Splash from "../pages/splash/Splash";
import Login from "../pages/login/Login";

export default function Router() {
  return (
    <Routes>
      <Route path='/splash' element={<Splash />} />
      <Route path='/' element={<Landing />} />
     <Route path="/login" element={<Login />} />


    </Routes>
  );
}