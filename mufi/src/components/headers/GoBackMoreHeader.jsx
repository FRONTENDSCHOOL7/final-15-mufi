import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/icon-arrow-left.png';
import MoreIcon from '../../assets/icon-more-vertical-large.png';
import * as GBM from './GoBackMoreHeaderStyle';
import { useSetRecoilState } from 'recoil';
import { isHeaderState, postMoreState } from '../../Atoms/atoms';

export default function GoBackMoreHeader({ content }) {
  const setIsModalOpen = useSetRecoilState(postMoreState);
  const setIsHeader = useSetRecoilState(isHeaderState);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  const handleMore = (e) => {
    setIsModalOpen(true);
    setIsHeader(true);
  };

  return (
    <GBM.HeaderWrapper>
      <GBM.BackButton onClick={handleGoBack}>
        <img src={BackIcon} alt="뒤로가기 아이콘" />
      </GBM.BackButton>
      <GBM.Content>{content}</GBM.Content>
      <GBM.MoreButton onClick={handleMore}>
        <img src={MoreIcon} alt="더보기 아이콘" onClick={handleMore}/>
      </GBM.MoreButton>
    </GBM.HeaderWrapper>
  );
}
