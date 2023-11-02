import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { HeaderWrapper, BackBtn, OkBtn } from './UploadHeaderStyle';
import BackIcon from '../../assets/icon-arrow-left.png';
import { useResetRecoilState } from 'recoil';
import { festivalState, postContentState, postImageState, postInfoState, tagsState } from '../../Atoms/atoms';

export default function UploadHeader({
  okButtonText = '업로드',
  showOkButton = true,
  backButtonText,
  formid,
  handleGoBack,
}) {
  const resetFestival = useResetRecoilState(festivalState);
  const resetTags = useResetRecoilState(tagsState);
  const resetContent = useResetRecoilState(postContentState);
  const resetImage = useResetRecoilState(postImageState);
  const resetPostInfo = useResetRecoilState(postInfoState);
  const navigate = useNavigate();
  const location = useLocation();

  handleGoBack = () => {
    console.log(location.pathname)
    if( location.pathname !== '/upload') {
      navigate(-1);
    } else { 
      if(window.confirm('!! 지금까지 작성햇던 내용이 모두 사라집니다. 그래도 괜찮으신가요?')){
        resetFestival();
        resetTags();
        resetContent();
        resetImage();
        resetPostInfo();
        navigate(-1);
      }
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
      {showOkButton && <OkBtn type='submit' form={formid}>{okButtonText}</OkBtn>}
    </HeaderWrapper>
  );
}
