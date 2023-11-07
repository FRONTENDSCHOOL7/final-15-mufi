import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as F from './FollowerStyle';
import BasicProfileSmall from '../../assets/basic-profile-small.png';
import FollowButton from './FollowButton';

import { useRecoilValue } from 'recoil';
import { accountnameState, userTokenState } from '../../Atoms/atoms';
import { followerAPI } from '../../api/followerAPI';
import { followStateAPI } from '../../api/followStateAPI';
import { unfollowStateAPI } from '../../api/unfollowStateAPI';
import { useNavigate, useParams } from 'react-router-dom';

export default function Follower() {
  const [followers, setFollowers] = useState([]);
  const navigate = useNavigate();
  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const { accountname: paramAccountname } = useParams();

  const onClickHandler = async (id) => {
    const index = followers.findIndex((follower) => follower._id === id);
    if (index !== -1) {
      const follower = followers[index];
      if (follower.isFollowing) {
        // Unfollow
        try {
          const res = await unfollowStateAPI({
            token,
            accountname: follower.accountname,
          });
          if (res) {
            setFollowers((prev) =>
              prev.map((f) => (f._id === id ? { ...f, isFollowing: false } : f))
            );
          }
        } catch (error) {
          console.error(error.response.data.message);
        }
      } else {
        // Follow
        try {
          const res = await followStateAPI({
            token,
            accountname: follower.accountname,
          });
          if (res) {
            setFollowers((prev) =>
              prev.map((f) => (f._id === id ? { ...f, isFollowing: true } : f))
            );
          }
        } catch (error) {
          console.error(error.response.data.message);
        }
      }
    }
  };

  useEffect(() => {
    const getfollowers = async () => {
      const res = await followerAPI({ token, accountname: paramAccountname });
      setFollowers(
        res.map((follower) => ({
          ...follower,
          isFollowing: follower.isfollow,
        }))
      );
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
          {follower.accountname !== accountname &&
            (follower.isFollowing ? (
              // following 되어있을 때
              <FollowButton
                content="취소"
                background="#fff"
                color="#000"
                border="1px solid #767676"
                onClick={() => onClickHandler(follower._id)}
              />
            ) : (
              <FollowButton
                content="팔로우"
                onClick={() => onClickHandler(follower._id)}
              />
            ))}
        </F.FollowerWrapper>
      ))}
    </>
  );
}
