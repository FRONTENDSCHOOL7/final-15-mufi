import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as HH from './HomeHeaderStyle';
import logoFullHeader from '../../assets/logo-full-header.png'


// 로고 + 검색버튼 헤더
export default function GoBackHeader() {
  const [isModalOpen, setIsModalOpen] = useState();
  
  return (
    <HH.HeaderWrapper>
      <HH.LogoHeader src={logoFullHeader}></HH.LogoHeader>
      <HH.SearchBtn></HH.SearchBtn>
    </HH.HeaderWrapper>
  );
}