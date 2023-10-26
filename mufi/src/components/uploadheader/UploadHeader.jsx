import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, BackBtn, OkBtn } from './UploadHeaderStyle';
import BackIcon from '../../assets/icon-arrow-left.png';

export default function UploadHeader({
  okButtonText = '업로드',
  showOkButton = true,
  backButtonText,
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
      {showOkButton && <OkBtn>{okButtonText}</OkBtn>}
    </HeaderWrapper>
  );
}
