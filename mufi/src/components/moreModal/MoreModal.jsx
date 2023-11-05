import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as MM from './MoreModalStyle';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { postIdState, postMoreState, userTokenState } from '../../Atoms/atoms';
import { deletePostAPI } from '../../api/deletePostAPI';

export default function MoreModal({ btnList = ['삭제', '수정'] }) {
  const setIsModalOpen = useSetRecoilState(postMoreState);
  const token = useRecoilValue(userTokenState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
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
  });

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

  return (
    <>
      <MM.Dim onClick={handleClose}></MM.Dim>
      <MM.ModalContainer>
        <MM.ModalBtn onClick={handleDelete}>{btnList[0]}</MM.ModalBtn>
        <MM.ModalBtn onClick={handleEdit}>{btnList[1]}</MM.ModalBtn>
      </MM.ModalContainer>
    </>
  );
}
