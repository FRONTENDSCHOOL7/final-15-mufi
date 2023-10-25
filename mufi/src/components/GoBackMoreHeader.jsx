import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../assets/icon-arrow-left.png';
import MoreIcon from '../assets/icon-more-vertical-large.png';
import * as GBM from './GoBackMoreHeaderStyle';

export default function GoBackMoreHeader() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const handleMore = () => {};

  return (
    <GBM.HeaderWrapper>
      <GBM.BackButton onClick={handleGoBack}>
        <img src={BackIcon} alt="뒤로가기 아이콘" />
      </GBM.BackButton>
      {/* 여기에 글자 넣으면 될 것 같음 */}
      <GBM.MoreButton onClick={handleMore}>
        <img src={MoreIcon} alt="더보기 아이콘" />
      </GBM.MoreButton>
    </GBM.HeaderWrapper>
  );
}
