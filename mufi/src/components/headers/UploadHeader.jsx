import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeaderWrapper, BackBtn, OkBtn } from './UploadHeaderStyle';
import BackIcon from '../../assets/icon-arrow-left.png';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import {
  festivalState,
  postContentState,
  postImageState,
  postInfoState,
  tagsState,
  lastVisitedPageState,
} from '../../Atoms/atoms';

export default function UploadHeader({
  okButtonText = '업로드',
  showOkButton = true,
  backButtonText,
  formid,
  handleGoBack,
  onClick,
}) {
  const resetFestival = useResetRecoilState(festivalState);
  const resetTags = useResetRecoilState(tagsState);
  const resetContent = useResetRecoilState(postContentState);
  const resetImage = useResetRecoilState(postImageState);
  const resetPostInfo = useResetRecoilState(postInfoState);
  const navigate = useNavigate();
  const location = useLocation();
  const lastVisitedPage = useRecoilValue(lastVisitedPageState);

  handleGoBack = () => {
    console.log(location.pathname);
    if (location.pathname !== '/upload') {
      navigate(-1);
    } else if (location.pathname === '/upload') {
      if (
        window.confirm(
          '!! 지금까지 작성했던 내용이 모두 사라집니다. 그래도 괜찮으신가요?'
        )
      ) {
        resetFestival();
        resetTags();
        resetContent();
        resetImage();
        resetPostInfo();
        navigate(lastVisitedPage);
      }
    } else if (location.pathname.startsWith('/upload')) {
      navigate('/upload');
    }
  };

  const handleSpanClick = (event) => {
    event.stopPropagation();
  };

  return (
    <HeaderWrapper>
      <BackBtn onClick={handleGoBack}>
        <img src={BackIcon} alt="뒤로가기 아이콘" />
        {backButtonText && (
          <span onClick={handleSpanClick}>{backButtonText}</span>
        )}
      </BackBtn>
      {showOkButton && (
        <OkBtn onClick={onClick} type="submit" form={formid}>
          {okButtonText}
        </OkBtn>
      )}
    </HeaderWrapper>
  );
}
