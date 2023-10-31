import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, HeaderBtn,Pagename } from './GoBackMusicHeaderStyle';
import BackIcon from '../assets/icon-arrow-left.png';
import SaveButton from '../components/SaveButton';



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
      <Pagename>프로필 뮤직 추가</Pagename>
      <SaveButton/>
    </HeaderWrapper>
  );
}
