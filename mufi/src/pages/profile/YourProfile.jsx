import React, { useState } from 'react';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import * as YP from './YourProfileStyle';
import BasicImg from '../../assets/basic-profile-large.png';
import ProfileButton from '../../components/profileButton/ProfileButton';
import ProfileMusicButton from '../../components/profileButton/ProfileMusicButton';
import ChatBtn from '../../assets/icon-chat-btn.png';
import ShareBtn from '../../assets/icon-share-btn.png';
import Akmu from '../../assets/akmu.png';
import PlayBtn from '../../assets/playBtn.png';
import { Link } from 'react-router-dom';
import ShowPost from '../../components/yourProfilePost/ShowPost';

export default function YourProfile() {
  // your profile(false)인지 my profile(true) 인지 check
  const [isMine, setIsMine] = useState(false);
  // 음악 재생중(true)인지 check
  const [isPlaying, setIsPlaying] = useState(false);
  // 팔로우 중(true)
  const [isFollow, setIsFollow] = useState(false);

  return (
    <>
      <YP.Layout>
        <GoBackMoreHeader />

        <YP.ProfileWrapper>
          {/* 팔로우, 프로필 이미지, 팔로잉 */}
          <YP.Follow>
            <YP.Followers>
              <Link to="/followerlist" style={{ textDecoration: 'none' }}>
                <strong>2950</strong>
                <p>followers</p>
              </Link>
            </YP.Followers>
            <YP.BasicImg src={BasicImg} alt="기본 이미지" />
            <YP.Followings>
              <strong>128</strong>
              <p>followings</p>
            </YP.Followings>
          </YP.Follow>

          {/* 프로필 (사용자 이름, 계정, 소개) */}
          <YP.Profile>
            <strong>애월읍 위니브 감귤농장</strong>
            <span>@ weniv_Mandarin</span>
            {isPlaying ? (
              <>
                <ProfileMusicButton musicContent="후라이의꿈 AKMU(악뮤)" />
              </>
            ) : (
              <></>
            )}
            <p>애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장</p>
          </YP.Profile>

          <YP.ButtonWrapper>
            {isMine ? (
              // myProfile
              <>
                <ProfileButton
                  content="프로필 수정"
                  background="#fff"
                  color="#000"
                  border="1px solid #767676"
                />
                <ProfileButton
                  content="상품 등록"
                  background="#fff"
                  color="#000"
                  border="1px solid #767676"
                />
              </>
            ) : (
              // yourProfile
              <>
                <YP.RoundButton>
                  <img src={ChatBtn} alt="채팅하기" />
                </YP.RoundButton>
                {isFollow ? (
                  <ProfileButton
                    content="언팔로우"
                    color="#000"
                    background="#fff"
                    border="1px solid #767676"
                  />
                ) : (
                  <ProfileButton content="팔로우" />
                )}
                <YP.RoundButton>
                  <img src={ShareBtn} alt="공유하기" />
                </YP.RoundButton>
              </>
            )}
          </YP.ButtonWrapper>
        </YP.ProfileWrapper>

        {/* 노래가 들어가야할 곳 */}
        {isPlaying ? (
          <>
            <YP.ProfileMusicWrapper>
              <img src={Akmu} alt="커버사진" />
              <YP.ProfileMusic>
                <strong>후라이의 꿈</strong>
                <p>AKMU(악뮤)</p>
              </YP.ProfileMusic>
              {/* 오디오바 */}
              <YP.PlayBtn>
                <img src={PlayBtn} alt="재생 버튼" />
              </YP.PlayBtn>
            </YP.ProfileMusicWrapper>
          </>
        ) : (
          <></>
        )}
        {/* 게시물의 존재 유무 */}
        {/* ShowPost 컴포넌트 = PostList 컴포넌트 + PostAlbum 컴포넌트 */}
        <ShowPost />
      </YP.Layout>
    </>
  );
}
