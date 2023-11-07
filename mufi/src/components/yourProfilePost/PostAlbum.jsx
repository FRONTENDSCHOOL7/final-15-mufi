import React from 'react';
import * as PA from './PostAlbumStyle';
import { Link } from 'react-router-dom';
import defaultImage from '../../assets/logo-gray-small.png';

export default function PostAlbum({ dataPost }) {
  return (
    <PA.PostAlbumWrapper>
      {dataPost.map((post, index) => (
        <Link to={`/postdetail/${post.id}`} key={index}>
          {post.image ? (
            <PA.AlbumImg src={post.image} alt={post.title} />
          ) : (
            <PA.DefaultImgWrapper>
              <PA.DefaultImg src={defaultImage} alt={post.title} />
            </PA.DefaultImgWrapper>
          )}
        </Link>
      ))}
    </PA.PostAlbumWrapper>
  );
}
