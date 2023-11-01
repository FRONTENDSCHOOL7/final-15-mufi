import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as F from './FollowerStyle';
import BasicProfileSmall from '../../assets/basic-profile-small.png';
import FollowButton from './FollowButton';

import { useRecoilValue } from 'recoil';
import { accountnameState, userTokenState } from '../../Atoms/atoms';
import { followerAPI } from '../../api/followerAPI';
import { useNavigate } from 'react-router-dom';

export default function Follower() {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();

  const onClickHandler = () => {
    setIsFollowing(!isFollowing);
  };

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);

  useEffect(() => {
    const getfollowers = async () => {
      const res = await followerAPI({ token, accountname });
      setFollowers(res);
    };
    getfollowers();
  }, []);

  return (
    <>
      {followers.map((follower) => (
        <F.FollowerWrapper key={follower._id}>
          <F.UserWrapper>
            <img
              onClick={() => navigate('/profile/' + follower.accountname)}
              src={follower.image || BasicProfileSmall}
              alt="프로필 사진"
            />
            <F.ContentWrapper
              onClick={() => navigate('/profile/' + follower.accountname)}
            >
              <F.UserName>{follower.username}</F.UserName>
              <F.UserInfo>{follower.intro}</F.UserInfo>
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
      ))}
    </>
  );
}
