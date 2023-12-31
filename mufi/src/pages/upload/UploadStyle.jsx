import styled from 'styled-components';

export const UploadWrapper = styled.div`
  position: relative;
  width: 390px;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
`;

export const UploadContent = styled.form`
  display: flex;
  flex-direction: column;
  height: calc(100% - 48px); // UploadHeader의 높이를 제외한 나머지 높이
`;

export const ContentLayout = styled.div`
  display: flex;
  align-items: flex-start;
  height: calc(100% - 48px);
  overflow-y: auto;
  box-sizing: border-box; // 패딩과 경계선이 너비와 높이에 포함되도록 설정
  padding-bottom: 120px;
  &::-webkit-scrollbar {
    display: none; // 스크롤 바 숨기기
  }
`;

export const InputWithImage = styled.div`
  display: flex;
  flex-direction: column; // PostInput과 이미지 컨테이너를 세로로 배열
  width: 304px; // 추가
  flex-grow: 1; // 추가: 부모 요소의 높이를 채우도록 설정
  overflow-y: auto; // 추가: 내용이 늘어날 때 스크롤 생성
`;

export const ProfileImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  margin: 17px 13px 0px 16px;
`;

export const PostInput = styled.textarea`
  width: 304px;
  min-height: 50px;
  margin-top: 29px;
  padding: 0px;
  border: none;
  resize: none;
  outline: none;

  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &::placeholder {
    font-family: Pretendard;
    color: #c4c4c4;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 120px; // 버튼들의 높이와 마진을 고려하여 적절한 높이 설정
  z-index: 20;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  width: 100%;
  padding : 12px;
  color: #000;

  font-size: 14px;
  font-weight: 500;

  background: #fff;
  border: none;
  border-top: 1px solid #dbdbdb;

  &:hover {
    background: #e0e0e0;
  }
`;

export const ButtonImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 7px;
`;

export const SelectedImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 19px;
  overflow-x: auto;
  flex-wrap: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
  /* &::before {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, white 0%, transparent 10% 70%, white 80%);
    position: absolute;
    z-index: 10;
  } */
`;

export const SelectedImage = styled.img`
  height: 228px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  margin-right: 10px;
`;

export const RemoveImageButton = styled.img`
  position: absolute;
  top: 6px;
  right: 16px;
  cursor: pointer;
  border-radius: 50%;
`;

export const ImageBox = styled.div`
  position: relative;
`;
