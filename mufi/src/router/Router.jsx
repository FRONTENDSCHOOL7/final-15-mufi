import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing/Landing';
import Splash from '../pages/splash/Splash';
import Join from '../pages/login/Join';
import Login from '../pages/login/Login';
import JoinProfile from '../pages/login/JoinProfile';
import Home from '../pages/home/Home';
import HomeSearch from '../pages/home/HomeSearch';
import YourProfile from '../pages/profile/YourProfile';
import FollowerList from '../pages/followers/FollowerList';
import ProfileChange from '../pages/profile/ProfileChange';
import MusicAdd from '../pages/profile/MusicAdd';
import ErrorPage from '../pages/errorPage/ErrorPage';

// import { Profile } from '../pages/profile/YourProfileStyle';




export default function Router() {
  return (
    <Routes>
      <Route path="/splash" element={<Splash />} />
      <Route path="/" element={<Landing />} />
      <Route path="/join" element={<Join />} />
      <Route path="/login" element={<Login />} />
      <Route path="/joinprofile" element={<JoinProfile />} />
        
      <Route path='/home' element={<Home />} />
      <Route path='/homesearch' element={<HomeSearch />} />

      <Route path="/yourprofile" element={<YourProfile />} />
      <Route path="/followerlist" element={<FollowerList />} />
      <Route path="/ProfileChange" element={<ProfileChange />} />      
      <Route path="/MusicAdd" element={<MusicAdd />} />      
      <Route path="/ErrorPage" element={<ErrorPage />} />      
            

    </Routes>
  );
}
