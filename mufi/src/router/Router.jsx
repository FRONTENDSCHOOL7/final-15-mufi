import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import Join from '../pages/login/Join';
import Login from '../pages/login/Login';
import JoinProfile from '../pages/login/JoinProfile';

import Upload from '../pages/upload/Upload';
import Hashtag from '../pages/upload/Hashtag';
import Festival from '../pages/upload/Festival';

import Home from '../pages/home/Home';
import HomeSearch from '../pages/home/HomeSearch';
import YourProfile from '../pages/profile/YourProfile';
import FollowerList from '../pages/followers/FollowerList';
import Chat from '../pages/chat/Chat';

export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/joinprofile" element={<JoinProfile />} />

      <Route path="/upload" element={<Upload />} />
      <Route path="/upload/hashtag" element={<Hashtag />} />
      <Route path="/upload/festival" element={<Festival />} />

      <Route path="/home" element={<Home />} />
      <Route path="/homesearch" element={<HomeSearch />} />

      <Route path="/yourprofile" element={<YourProfile />} />
      <Route path="/followerlist" element={<FollowerList />} />

      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}
