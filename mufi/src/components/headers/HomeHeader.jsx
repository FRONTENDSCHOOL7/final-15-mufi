import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as HH from './HomeHeaderStyle';
import logoFullHeader from '../../assets/logo-full-header.png'

// 로고 + 검색버튼 헤더 / 검색버튼 클릭시 검색창 등장
export default function GoBackHeader() {
  const navigate = useNavigate();
  const onSearchBtn = () => {
    navigate('/homeSearch');
  }

  return (
    <HH.HeaderWrapper>
      <HH.LogoHeader  src={logoFullHeader}></HH.LogoHeader>
      <HH.SearchBtn onClick={onSearchBtn}></HH.SearchBtn>
    </HH.HeaderWrapper>
  );
}