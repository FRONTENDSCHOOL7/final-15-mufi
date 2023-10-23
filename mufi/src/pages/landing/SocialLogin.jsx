import React from 'react'
import * as S from './SocialLoginStyle'

export default function SocialLogin({props}) {
  const {isModalOpen, setIsModalOpen, onEmailLogin, onJoin} = props
  const onClose = (e) => {
    let container = document.querySelector(".container")
    // container.classList.add(moveDownwards);
    setIsModalOpen(false);
  }

  return (
    <>
      <S.Dim onClick={onClose}/>
      <S.Container className='container'>
        <S.KaKao>카카오톡 계정으로 로그인</S.KaKao>
        <S.Google>구글 계정으로 로그인</S.Google>
        <S.Facebook>페이스북 계정으로 로그인</S.Facebook>
        <div>
          <S.TextBtn onClick={onEmailLogin}>이메일로 로그인</S.TextBtn>
          <S.Span>|</S.Span>
          <S.TextBtn onClick={onJoin}>회원가입</S.TextBtn>
        </div>
      </S.Container>
    </>
  )
}
