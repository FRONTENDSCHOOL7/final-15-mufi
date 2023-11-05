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
import Profile from '../pages/profile/Profile';
import FollowerList from '../pages/followers/FollowerList';
import FollowingList from '../pages/followers/FollowingList';
import Chat from '../pages/chat/Chat';
import ChatRoom from '../pages/chat/ChatRoom';
import Searched from '../pages/searched/Searched';

import MusicAdd from '../pages/profile/MusicAdd';
import ProfileChange from '../pages/profile/ProfileChange';
import ErrorPage from '../pages/errorPage/ErrorPage';

import PostDetail from '../pages/post/PostDetail';

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
      <Route path="/searched/:keyword" element={<Searched />} />

      <Route path="/profile/:accountname" element={<Profile />} />
      <Route path="/followerslist/:accountname" element={<FollowerList />} />
      <Route path="/followingslist/:accountname" element={<FollowingList />} />

      <Route path="/chat" element={<Chat />} />
      <Route path="/chatroom" element={<ChatRoom />} />


      <Route path="/postdetail/:postId" element={<PostDetail />} />

      <Route path="/musicAdd" element={<MusicAdd />} />
      <Route path="/profileChange" element={<ProfileChange/>} />
      <Route path="/errorPage" element={<ErrorPage/>} />

    </Routes>
  );
}
