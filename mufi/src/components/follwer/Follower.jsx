import React, { useState } from 'react';
import * as F from './FollowerStyle';
import BasicProfileSmall from '../../assets/basic-profile-small.png';
import FollowButton from './FollowButton';

export default function Follower({ username, userinfo }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const onClickHandler = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <>
      <F.FollowerWrapper>
        <F.UserWrapper>
          <img src={BasicProfileSmall} alt="프로필 사진" />
          <F.ContentWrapper>
            <F.UserName>{username}</F.UserName>
            <F.UserInfo>{userinfo}</F.UserInfo>
          </F.ContentWrapper>
        </F.UserWrapper>
        {isFollowing ? (
          // following 되어있을 때
          <FollowButton
            content="취소"
            background="#fff"
            color="#000"
            border="1px solid #767676"
            onClick={onClickHandler}
          />
        ) : (
          <FollowButton content="팔로우" onClick={onClickHandler} />
        )}
      </F.FollowerWrapper>
    </>
  );
}
