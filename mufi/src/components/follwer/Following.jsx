import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as F from './FollowingStyle';
import BasicProfileSmall from '../../assets/basic-profile-small.png';
import FollowButton from './FollowButton';

import { useRecoilValue } from 'recoil';
import { accountnameState, userTokenState } from '../../Atoms/atoms';
import { followingAPI } from '../../api/followingAPI';
import { followStateAPI } from '../../api/followStateAPI';
import { unfollowStateAPI } from '../../api/unfollowStateAPI';
import { useNavigate, useParams } from 'react-router-dom';

export default function Following() {
  const [followings, setFollowings] = useState([]);
  const navigate = useNavigate();

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const { accountname: paramAccountname } = useParams();

  const onClickHandler = async (id) => {
    const index = followings.findIndex((following) => following._id === id);
    if (index !== -1) {
      const following = followings[index];
      if (following.isFollowing) {
        // Unfollow
        try {
          const res = await unfollowStateAPI({
            token,
            accountname: following.accountname,
          });
          if (res) {
            setFollowings((prev) =>
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
            accountname: following.accountname,
          });
          if (res) {
            setFollowings((prev) =>
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
    const getfollowings = async () => {
      const res = await followingAPI({ token, accountname: paramAccountname });
      setFollowings(
        res.map((following) => ({
          ...following,
          isFollowing: following.isfollow,
        }))
      );
    };
    getfollowings();
  }, []);

  return (
    <>
      {followings.map((following) => (
        <F.FollowingWrapper key={following._id}>
          <F.UserWrapper>
            <img
              onClick={() => navigate('/profile/' + following.accountname)}
              src={following.image || BasicProfileSmall}
              alt="프로필 사진"
            />
            <F.ContentWrapper
              onClick={() => navigate('/profile/' + following.accountname)}
            >
              <F.UserName>{following.username}</F.UserName>
              <F.UserInfo>{following.intro}</F.UserInfo>
            </F.ContentWrapper>
          </F.UserWrapper>
          {following.accountname !== accountname &&
            (following.isFollowing ? (
              // following 되어있을 때
              <FollowButton
                content="취소"
                background="#fff"
                color="#000"
                border="1px solid #767676"
                onClick={() => onClickHandler(following._id)}
              />
            ) : (
              <FollowButton
                content="팔로우"
                onClick={() => onClickHandler(following._id)}
              />
            ))}
        </F.FollowingWrapper>
      ))}
    </>
  );
}
