import styled, { keyframes } from 'styled-components';
import basicProfile from '../../assets/basic-profile-small.png';
import uploadImg from '../../assets/icon-image.png';
import iconClose from '../../assets/icon-close.png';

export const ChatList = styled.ul`
  height: calc(100vh - (47.5px + 60px));
  width: 100%;
  /* box-shadow: inset 0 0 32px red; */
  overflow: scroll;
  box-sizing: border-box;
`;

export const ChatItem = styled.li`
  padding: 8px 16px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  gap: 8px;
  /* box-shadow: inset 0 0 32px blue; */
`;

export const Content = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-image: url(${basicProfile});
  flex-shrink: 0;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const SenderName = styled.h3`
  font-size: 14px;
  font-weight: 500;
`;
export const SentContent = styled.p`
  font-size: 12px;
  color: #767676;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

export const SentTime = styled.p`
  font-size: 12px;
  color: #dbdbdb;
`;

export const ChatTextContent = styled.main`
  background-color: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  box-sizing: border-box;
  overflow: scroll;
`;

export const ChatInputWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 16px;
  box-sizing: border-box;
  gap: 14px;
  justify-content: space-between;
  border-top: 1px solid #dbdbdb;
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgInputLabel = styled.label`
  content: '';
  width: 40px;
  height: 40px;

  border-radius: 32px;
  background-color: #000;
  background-image: url(${uploadImg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const ChatInput = styled.textarea`
  flex-grow: 1;
  border: none;
  resize: none;
  font: inherit;
  ::placeholder {
    color: #c4c4c4;
  }
`;

export const ChatSendButton = styled.button`
  color: #c4c4c4;
  border: none;
  background-color: transparent;
  &:enabled {
    color: #0019ff;
  }
`;

// chatBalloon
export const appearing = keyframes`
  0% {
    opacity: 0;
    transform: translateY(10px);
  } 100% {
    opacity: 1;
    transform: translateY(0);
  }

`;
export const ChatBallonWrapper = styled.div`
  animation: ${appearing} 0.5s;
  transition: all 0.5s;
  display: flex;
  gap: 13px;
  &.my {
    justify-content: flex-end;
  }
`;
export const ChatSenderProfile = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  background-color: #767676;
  border-radius: 40px;
  background-image: url(${basicProfile});
  &.my {
    display: none;
  }
`;
export const ChatBalloonTextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
`;
export const ChatBalloon = styled.p`
  max-width: 214px;
  background-color: #1c1c1c;
  color: white;
  border: 1px solid #c4c4c4;
  padding: 12px 16px;
  border-radius: 0 8px 8px 8px;
  &.my {
    border: 1px solid #2033e7;
    border-radius: 8px 0 8px 8px;
    background-color: #2033e7;
    max-width: 238px;
  }
`;
export const ChatBalloonSentTime = styled.p`
  color: #767676;
  font-size: 10px;
  &.my {
    order: -1;
  }
`;

// 채팅방 이미지
export const TempImageWrapper = styled.div`
  height: 142px;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #dbdbdb;
  padding: 8px;
  box-sizing: border-box;
  overflow: scroll;
  white-space: nowrap;
  display: flex;
  gap: 8px;
`;
export const TempImageHolder = styled.div`
  background-color: #dbdbdb;
  box-sizing: border-box;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  position: relative;
`;
export const TempImage = styled.img`
  max-height: 100%;
  border-radius: 8px;
  aspect-ratio: 1/1;
  object-fit: cover;
`;
export const TempImageRemoveBtn = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${iconClose});
  background-color: transparent;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
`;
