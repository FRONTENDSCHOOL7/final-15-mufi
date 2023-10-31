import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, HeaderBtn } from './GoBackHeaderStyle';
import BackIcon from '../assets/icon-arrow-left.png';
import SaveButton from '../components/SaveButton';


// 뒤로가기만 있는 헤더
export default function GoBackHeader() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <HeaderWrapper>
      <HeaderBtn onClick={handleGoBack}>
        <img src={BackIcon} alt="뒤로가기 아이콘" />
      </HeaderBtn>
      <SaveButton/>
    </HeaderWrapper>
  );
}
