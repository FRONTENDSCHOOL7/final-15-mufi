import React, { useState } from 'react';
import * as SP from './ShowPostStyle';
import AlbumOff from '../../assets/icon-post-album-off.png';
import ListOff from '../../assets/icon-post-list-off.png';
import AlbumOn from '../../assets/icon-post-album-on.png';
import ListOn from '../../assets/icon-post-list-on.png';
import PostList from '../post/PostList';
import PostAlbum from './PostAlbum';
import HomeEmpty from "../../pages/home/HomeEmpty"

export default function ShowPost({ dataPost }) {
  const [btnState, setBtnState] = useState('list');

  return (
    <>
      <SP.ShowPostWrapper>
        <SP.ListWrapper>
          <button
            style={{ height: '27px', width: '27px', padding: '0', border: '0' }}
            onClick={() => setBtnState('list')}
          >
            <img
              style={{ backgroundColor: 'white' }}
              src={btnState === 'list' ? ListOn : ListOff}
              alt="사용자 게시물 리스트형으로 보기 버튼"
            />
          </button>
        </SP.ListWrapper>

        <SP.AlbumWrapper>
          <button
            style={{
              height: '27px',
              width: '27px',
              padding: '0',
              border: '0',
              outline: 'none',
            }}
            onClick={() => setBtnState('album')}
          >
            <img
              style={{ backgroundColor: 'white' }}
              src={btnState === 'album' ? AlbumOn : AlbumOff}
              alt="사용자 게시물 앨범형으로 보기 버튼"
            />
          </button>
        </SP.AlbumWrapper>
      </SP.ShowPostWrapper>

      <SP.PostContainer>
        {dataPost.length === 0 ? <HomeEmpty emptyText='아직 아무런 게시물도 올리지 않았어요..' showBtn={false}/> : null}
        {btnState === 'list' ? (
          <PostList dataPost={dataPost} />
        ) : (
          <PostAlbum dataPost={dataPost} />
        )}
      </SP.PostContainer>
    </>
  );
}
