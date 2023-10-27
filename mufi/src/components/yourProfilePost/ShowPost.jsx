import React, { useState } from 'react';
import * as SP from './ShowPostStyle';
import AlbumOff from '../../assets/icon-post-album-off.png';
import ListOff from '../../assets/icon-post-list-off.png';
import AlbumOn from '../../assets/icon-post-album-on.png';
import ListOn from '../../assets/icon-post-list-on.png';

export default function ShowPost() {
  const [btnState, setBtnState] = useState('list');

  const toggleBtnState = () => {
    btnState === 'list' ? setBtnState('album') : setBtnState('list');
  };

  return (
    <>
      <SP.ShowPostWrapper>
        <SP.ListWrapper>
          <button onClick={toggleBtnState}>
            <img
              src={btnState === 'list' ? ListOn : ListOff}
              alt="사용자 게시물 리스트형으로 보기 버튼"
            />
          </button>
        </SP.ListWrapper>
        <SP.AlbumWrapper>
          <button onClick={toggleBtnState}>
            <img
              src={btnState === 'album' ? AlbumOn : AlbumOff}
              alt="사용자 게시물 리스트형으로 보기 버튼"
            />
          </button>
        </SP.AlbumWrapper>
      </SP.ShowPostWrapper>
      {/* 여기 밑에 나옴 => PostList + PostAlbum*/}
    </>
  );
}
