import React from 'react'
import logoGray from '../../assets/logo-gray-small.png'
import * as H from "./HomeStyle"
import { useNavigate } from 'react-router-dom';

export default function HomeEmpty({
  emptyText="유저를 검색해 팔로우 해보세요!",
  showBtn=true,
  btnText="검색하기",
  handleBtnClick
}) {
  const navigate = useNavigate();
  const onSearchBtn = () => {
    navigate('/homesearch');
  }
  return (
    <>
        <H.ContentEmptyWrapper>
          <H.ImgWrapper>
            <img src={logoGray} alt="gray-M" />
          </H.ImgWrapper>
          <H.Text>{emptyText}</H.Text>
          {showBtn && <H.FollowBtnLarge onClick={ handleBtnClick || onSearchBtn}>{btnText}</H.FollowBtnLarge>}
        </H.ContentEmptyWrapper>
    </>
  )
}
