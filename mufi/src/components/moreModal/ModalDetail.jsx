import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MM from './ModalDetailStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  accountnameState,
  postIdState,
  postInfoState,
  postMoreState,
  userTokenState,
} from '../../Atoms/atoms';
import { deletePostAPI } from '../../api/deletePostAPI';
import { reportPostAPI } from '../../api/reportPostAPI';

export default function ModalDetail({ btnList = ['삭제', '수정'] }) {
  const setIsModalOpen = useSetRecoilState(postMoreState);
  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const [isMine, setIsMine] = useState(true);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [postInfo, setPostInfo] = useRecoilState(postInfoState);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

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
    navigate('/home');
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

  return (
    <>
      <MM.Dim onClick={handleClose}></MM.Dim>
      <MM.ModalContainer>
        {isMine ? (
          <>
            <MM.ModalBtn onClick={handleDelete}>{btnList[0]}</MM.ModalBtn>
            <MM.ModalBtn onClick={handleEdit}>{btnList[1]}</MM.ModalBtn>
          </>
        ) : (
          <MM.ModalBtn onClick={handleReport}>신고</MM.ModalBtn>
        )}
      </MM.ModalContainer>
    </>
  );
}
