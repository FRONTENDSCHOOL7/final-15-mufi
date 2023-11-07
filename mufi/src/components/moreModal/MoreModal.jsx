import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MM from './MoreModalStyle';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  accountnameState,
  isHeaderState,
  postIdState,
  postInfoState,
  postMoreState,
  userLoginState,
  userTokenState,
} from '../../Atoms/atoms';
import { deletePostAPI } from '../../api/deletePostAPI';
import { reportPostAPI } from '../../api/reportPostAPI';

export default function MoreModal() {
  let btnList = [];
  const setIsModalOpen = useSetRecoilState(postMoreState);
  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const [isMine, setIsMine] = useState(true);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [postInfo, setPostInfo] = useRecoilState(postInfoState);
  const resetAccountname = useResetRecoilState(accountnameState);
  const setUsersLogin = useSetRecoilState(userLoginState);
  const resetUserToken = useResetRecoilState(userTokenState);
  const [isHeader, setIsHeader] = useRecoilState(isHeaderState);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
    setPostId('');
    setPostInfo({});
    setIsHeader(false);
  };

  if (isHeader) {
    btnList = ['설정 및 개인정보', '로그아웃'];
  } else {
    btnList = ['삭제', '수정'];
  }

  useEffect(() => {
    if (postInfo.author) {
      if (postInfo.author.accountname !== accountname) {
        setIsMine(false);
      }
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    });
    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          handleClose();
        }
      });
    };
  }, []);

  // 삭제 기능
  const handleDelete = async () => {
    await deletePostAPI({ token, postId });
    setPostId('');
    handleClose();
    window.location.replace('');
  };

  // 수정기능
  const handleEdit = async () => {
    navigate('/upload');
  };

  // 신고기능
  const handleReport = async () => {
    if (window.confirm('정말 신고하시겠습니까?')) {
      await reportPostAPI({ token, postId });
      alert('신고되었습니다!');
    }
    handleClose();
  };

  // 설정 및 개인정보
  const handleSetting = () => {
    alert(accountname);
    handleClose();
  };

  // 로그아웃
  const handleLogout = () => {
    if (window.confirm('로그아웃 하시겠습니까?')) {
      setUsersLogin(false);
      resetAccountname();
      resetUserToken();
      navigate('/');
    }
    handleClose();
  };

  return (
    <>
      <MM.Dim onClick={handleClose}></MM.Dim>
      <MM.ModalContainer>
        {isMine ? (
          <>
            <MM.ModalBtn onClick={isHeader ? handleSetting : handleDelete}>
              {btnList[0]}
            </MM.ModalBtn>
            <MM.ModalBtn onClick={isHeader ? handleLogout : handleEdit}>
              {btnList[1]}
            </MM.ModalBtn>
          </>
        ) : (
          <MM.ModalBtn onClick={handleReport}>신고</MM.ModalBtn>
        )}
      </MM.ModalContainer>
    </>
  );
}
