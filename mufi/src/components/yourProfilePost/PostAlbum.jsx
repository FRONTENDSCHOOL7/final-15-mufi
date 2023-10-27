import React from 'react';
import * as PA from './PostAlbumStyle';

export default function PostAlbum() {
  return (
    <>
      <PA.PostAlbumWrapper>
        {/* 이미지가 여러개이면 layer 여러 개라고 띄워주기
        (img.length > 1 ? (이미지 여러개) : (이미지 한개))
        */}
        <PA.AlbumImg>이미지가 들어올거에요^^</PA.AlbumImg>
      </PA.PostAlbumWrapper>
    </>
  );
}

// api 연동 후 가져올 예정
