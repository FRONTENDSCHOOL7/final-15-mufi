import React, { useEffect } from 'react'
import * as NB from "./NavBarStyle"
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const location = useLocation();
  
  useEffect(()=>{
    console.log('location',    location.pathname);

    switch (location.pathname) {
      case '/home':
        const btnHome = document.querySelector('.btn-home');
        btnHome.classList.add('selected');

        const textHome = btnHome.querySelector('p');
        textHome.classList.add('selected');
        break;

      case '/chat':
        const btnChat = document.querySelector('.btn-chat');
        btnChat.classList.add('selected');
        
        const textChat = btnChat.querySelector('p');
        textChat.classList.add('selected');
        break;

      case '/upload':
        const btnUpload = document.querySelector('.btn-upload');
        btnUpload.classList.add('upload');

        const textUpload = btnUpload.querySelector('p');
        textUpload.classList.add('selected');
        break;

      case '/yourprofile':
        const btnProfile = document.querySelector('.btn-profile');
        btnProfile.classList.add('selected');

        const textProfile = btnProfile.querySelector('p');
        textProfile.classList.add('selected');
        break;
      default:
        break;
    }
  }, [])
  

  const navigate = useNavigate();
  const toHome = () => {
    navigate('/home');
  }
  const toChat = () => {
    navigate('/chat');
  }
  const toUpload = () => {
    navigate('/upload');
  }
  const toProfile = () => {
    navigate('/yourprofile');
  }

  return (
    <>
      <NB.Container>
        <NB.IconList>

          <li>
            <NB.Home className='btn-home' onClick={toHome}>
              <NB.Label>홈</NB.Label>
            </NB.Home>
          </li>

          <li>
            <NB.Chat className='btn-chat' onClick={toChat}>
              <NB.Label>채팅</NB.Label>
            </NB.Chat>
          </li>

          <li>
            <NB.Upload className='btn-upload' onClick={toUpload}>
              <NB.Label>게시물 작성</NB.Label>
            </NB.Upload>
          </li>

          <li>
            <NB.Profile className='btn-profile' onClick={toProfile}>
              <NB.Label>프로필</NB.Label>
            </NB.Profile>
          </li>

        </NB.IconList>
      </NB.Container>
    </>
  )
}