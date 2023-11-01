import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as F from './FollowingStyle';
import BasicProfileSmall from '../../assets/basic-profile-small.png';
import FollowButton from './FollowButton';

import { useRecoilValue } from 'recoil';
import { accountnameState, userTokenState } from '../../Atoms/atoms';
import { followingAPI } from '../../api/followingAPI';

export default function Follower() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followings, setFollowings] = useState([]);

  const onClickHandler = () => {
    setIsFollowing(!isFollowing);
  };

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);

  useEffect(() => {
    const getfollowings = async () => {
      const res = await followingAPI({ token, accountname });
      setFollowings(res);
    };
    getfollowings();
  }, []);

  return (
    <>
      {followings.map((following) => (
        <F.FollowingWrapper key={following._id}>
          <F.UserWrapper>
            <img src={following.image || BasicProfileSmall} alt="프로필 사진" />
            <F.ContentWrapper>
              <F.UserName>{following.username}</F.UserName>
              <F.UserInfo>{following.intro}</F.UserInfo>
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
        </F.FollowingWrapper>
      ))}
    </>
  );
}
