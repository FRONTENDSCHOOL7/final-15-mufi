import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import Join from '../pages/login/Join';
import Login from '../pages/login/Login';
import JoinProfile from '../pages/login/JoinProfile';
import Home from '../pages/home/Home';
import YourProfile from '../pages/profile/YourProfile';
import FollowerList from '../pages/followers/FollowerList';

export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/joinprofile" element={<JoinProfile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/yourprofile" element={<YourProfile />} />
      <Route path="/followerlist" element={<FollowerList />} />
    </Routes>
  );
}
