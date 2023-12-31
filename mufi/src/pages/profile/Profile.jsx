import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import * as P from './ProfileStyle';
import BasicImg from '../../assets/basic-profile-large.png';
import ProfileButton from '../../components/profileButton/ProfileButton';
import ProfileMusicButton from '../../components/profileButton/ProfileMusicButton';
import ChatBtn from '../../assets/icon-chat-btn.png';
import ShareBtn from '../../assets/icon-share-btn.png';
import Akmu from '../../assets/akmu.png';
import MusicBar from '../../assets/musicbar.png';
import PlayBtn from '../../assets/playBtn.png';
import { Link, useParams } from 'react-router-dom';
import ShowPost from '../../components/yourProfilePost/ShowPost';
import { getUserPostAPI } from '../../api/getUserPostAPI';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  accountnameState,
  changedProfileState,
  postMoreState,
  userTokenState,
  lastVisitedPageState,
} from '../../Atoms/atoms';
import NavBar from '../../components/navBar/NavBar';
import React, { useEffect, useState } from 'react';
import MoreModal from '../../components/moreModal/MoreModal';
import { profileAPI } from '../../api/profileAPI';
import { useNavigate } from 'react-router-dom';
import { followStateAPI } from '../../api/followStateAPI';
import { unfollowStateAPI } from '../../api/unfollowStateAPI';
import { Helmet } from 'react-helmet-async';

export default function Profile() {
  // 음악 재생중(true)인지 check
  const [isPlaying, setIsPlaying] = useState(true);
  // 팔로우 중(true)
  const [isFollow, setIsFollow] = useState(false);
  const [profile, setProfile] = useState([]);
  const setChangedProfile = useSetRecoilState(changedProfileState);
  const token = useRecoilValue(userTokenState);
  const myAccountname = useRecoilValue(accountnameState);
  const [dataPost, setDataPost] = useState([]);
  const [isModalOpen, setIsModalOpen] = useRecoilState(postMoreState);

  const { accountname } = useParams();
  const setLastVisitedPage = useSetRecoilState(lastVisitedPageState);

  useEffect(() => {
    setLastVisitedPage(`/profile/${accountname}`);
  }, [accountname]);
  // your profile(false)인지 my profile(true) 인지 check
  const [isMine, setIsMine] = useState(myAccountname === accountname);

  const navigate = useNavigate();
  const onProfileChange = () => {
    if (isMine) {
      navigate('/profilechange');
      setChangedProfile(profile);
    }
  };

  const onProfileMusicChange = () => {
    if (isMine) {
      navigate('/musicadd');
    }
  };

  const onClickHandler = async () => {
    if (isFollow) {
      // Unfollow
      try {
        const res = await unfollowStateAPI({
          token,
          accountname: profile.accountname,
        });
        if (res) {
          setIsFollow(false);
        }
      } catch (error) {
        console.error(error.response.data.message);
      }
    } else {
      // Follow
      try {
        const res = await followStateAPI({
          token,
          accountname: profile.accountname,
        });
        if (res) {
          setIsFollow(true);
        }
      } catch (error) {
        console.error(error.response.data.message);
      }
    }
    const res = await profileAPI({ token, accountname });
    setProfile(res);
  };

  useEffect(() => {
    setIsModalOpen(false);
    const getPostList = async () => {
      const dataPost = await getUserPostAPI({ token, accountname });
      setDataPost(dataPost);
    };
    getPostList();
  }, []);

  useEffect(() => {
    const getProfile = async () => {
      const res = await profileAPI({ token, accountname });
      setProfile(res);
      setIsFollow(res.isfollow);
    };
    getProfile();
  }, []);

  // 프로필 이미지 엑박 처리 추가
  const handleImgError = (e) => {
    console.log('이미지에러~!~!');
    e.target.src = BasicImg;
  };

  return (
    <>
      <Helmet>
        <title>PROFILE</title>
      </Helmet>
      <P.Layout>
        <GoBackMoreHeader />

        <P.ProfilePageWrapper>
          <P.ProfileWrapper>
            {/* 팔로우, 프로필 이미지, 팔로잉 */}
            <P.Follow>
              <P.Followers>
                <Link
                  to={`/followerslist/${accountname}`}
                  style={{ textDecoration: 'none' }}
                >
                  <strong>{profile.followerCount}</strong>
                  <p>followers</p>
                </Link>
              </P.Followers>
              <P.BasicImg
                src={BasicImg && profile.image}
                alt="프로필이미지"
                onError={handleImgError}
              />
              <P.Followings>
                <Link
                  to={`/followingslist/${accountname}`}
                  style={{ textDecoration: 'none' }}
                >
                  <strong>{profile.followingCount}</strong>
                  <p>followings</p>
                </Link>
              </P.Followings>
            </P.Follow>

            {/* 프로필 (사용자 이름, 계정, 소개) */}
            <P.Profile>
              <strong>{profile.username}</strong>
              <span>@ {profile.accountname}</span>
              {isPlaying ? (
                <>
                  <ProfileMusicButton musicContent="후라이의꿈 AKMU(악뮤)" />
                </>
              ) : (
                <></>
              )}
              <p>{profile.intro}</p>
            </P.Profile>

            <P.ButtonWrapper>
              {isMine ? (
                // myProfile
                <>
                  <ProfileButton
                    onClick={onProfileChange}
                    content="프로필 수정"
                    background="#fff"
                    color="#000"
                    border="1px solid #767676"
                  />
                  <ProfileButton
                    onClick={onProfileMusicChange}
                    content="프로필 뮤직 수정"
                    background="#fff"
                    color="#000"
                    border="1px solid #767676"
                  />
                </>
              ) : (
                // yourProfile
                <>
                  <P.RoundButton>
                    <img src={ChatBtn} alt="채팅하기" />
                  </P.RoundButton>
                  {isFollow ? (
                    <ProfileButton
                      content="언팔로우"
                      color="#000"
                      background="#fff"
                      border="1px solid #767676"
                      onClick={onClickHandler}
                    />
                  ) : (
                    <ProfileButton content="팔로우" onClick={onClickHandler} />
                  )}
                  <P.RoundButton>
                    <img src={ShareBtn} alt="공유하기" />
                  </P.RoundButton>
                </>
              )}
            </P.ButtonWrapper>
          </P.ProfileWrapper>

          {/* 노래가 들어가야할 곳 */}
          {isPlaying ? (
            <>
              <P.ProfileMusicWrapper>
                <P.Img src={Akmu} alt="커버사진" />
                <P.ProfileMusic>
                  <strong>후라이의 꿈</strong>
                  <p>AKMU(악뮤)</p>
                </P.ProfileMusic>
                <P.MusicBar src={MusicBar} alt="재생바" />
                <P.PlayBtn>
                  <P.ImgPlay src={PlayBtn} alt="재생 버튼" style={{}} />
                </P.PlayBtn>
              </P.ProfileMusicWrapper>
            </>
          ) : (
            <></>
          )}

          {/* 게시물의 존재 유무 */}
          {/* ShowPost 컴포넌트 = PostList 컴포넌트 + PostAlbum 컴포넌트 */}
          <ShowPost dataPost={dataPost} />

          {isModalOpen && <MoreModal></MoreModal>}
        </P.ProfilePageWrapper>
        <NavBar />
      </P.Layout>
    </>
  );
}
