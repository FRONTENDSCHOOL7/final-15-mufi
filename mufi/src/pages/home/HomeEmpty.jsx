import React from 'react'
import logoGray from '../../assets/logo-gray-small.png'
import * as H from "./HomeStyle"
import { useNavigate } from 'react-router-dom';

export default function HomeEmpty() {
  const navigate = useNavigate();
  const onSearchBtn = () => {
    navigate('/homeSearch');
  }
  return (
    <>
        <H.ContentEmptyWrapper>
          <H.ImgWrapper>
            <img src={logoGray} alt="gray-M" />
          </H.ImgWrapper>
          <H.Text>유저를 검색해 팔로우 해보세요!</H.Text>
          <H.FollowBtnLarge onClick={onSearchBtn}>검색하기</H.FollowBtnLarge>
        </H.ContentEmptyWrapper>
    </>
  )
}
