import React, { useEffect } from 'react';
import * as NB from './NavBarStyle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountnameState } from '../../Atoms/atoms';

export default function NavBar() {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
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

      case '/profile/' + params.accountname:
        const btnProfile = document.querySelector('.btn-profile');
        btnProfile.classList.add('selected');

        const textProfile = btnProfile.querySelector('p');
        textProfile.classList.add('selected');
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const accountName = useRecoilValue(accountnameState);

  const navigate = useNavigate();
  const toHome = () => {
    navigate('/home');
  };
  const toChat = () => {
    navigate('/chat');
  };
  const toUpload = () => {
    navigate('/upload');
  };
  const toProfile = () => {
    navigate(`/profile/${accountName}`);
    window.location.replace('');
  };

  return (
    <>
      <NB.Container>
        <NB.IconList>
          <li>
            <NB.Home className="btn-home" onClick={toHome}>
              <NB.Label>홈</NB.Label>
            </NB.Home>
          </li>

          <li>
            <NB.Chat className="btn-chat" onClick={toChat}>
              <NB.Label>채팅</NB.Label>
            </NB.Chat>
          </li>

          <li>
            <NB.Upload className="btn-upload" onClick={toUpload}>
              <NB.Label>게시물 작성</NB.Label>
            </NB.Upload>
          </li>

          <li>
            <NB.Profile className="btn-profile" onClick={toProfile}>
              <NB.Label>프로필</NB.Label>
            </NB.Profile>
          </li>
        </NB.IconList>
      </NB.Container>
    </>
  );
}
