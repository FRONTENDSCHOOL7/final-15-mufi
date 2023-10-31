import React from 'react';
import * as MM from './MoreModalStyle';
import { useSetRecoilState } from 'recoil';
import { postMoreState } from '../../Atoms/atoms';


export default function MoreModal() {
  const setIsModalOpen = useSetRecoilState(postMoreState)
  const handleClose = () => {
    setIsModalOpen(false);
  }

  return (
    <>
      <MM.Dim onClick={handleClose}></MM.Dim>
      <MM.ModalContainer>
        <MM.ModalBtn onClick={handleClose}>삭제</MM.ModalBtn>
      </MM.ModalContainer>
    </>
  )
}
