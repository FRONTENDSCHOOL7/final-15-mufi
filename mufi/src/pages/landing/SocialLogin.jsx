import React from 'react'
import styled from "styled-components";
import kakao from '../../assets/kakao.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 390px;
  height: 362px;
  border-radius: 20px;
  background: #FFF;
  box-shadow: 0 0 8px #00000025;
  margin: 0 auto;
`

const LoginBtn = styled.button`
  width: 322px;
  line-height: 18px;
  padding: 13px;
  border-radius: 36px;
  background-color: #fff;
  position: relative;
  font-size: 14px;
  color: #767676;
  font-weight: 400;
  &::before {
    content: '';
    width: 24px;
    height: 24px;
    display: inline-block;
    position: absolute;
    left: 14px;
  }
`

const KaKao = styled(LoginBtn)`
  border: 1px solid #F2C94C;
  &::before {
    background: url(${kakao}) no-repeat;
  }
`

const Google = styled(LoginBtn)`
  border: 1px solid #767676;
  &::before {
    background: url(${google}) no-repeat;
  }
`

const Facebook = styled(LoginBtn)`
  border: 1px solid #2D9CDB;
  &::before {
    background: url(${facebook}) no-repeat;
  }
`

const TextBtn = styled.button`
  color: #767676;
  font-size: 12px;
  background: none;
  border: none;
  font-weight: 400;
  margin-top: 10px;
`

const Span = styled.span`
  color: #767676;
  font-size: 12px;
  background: none;
  font-weight: 400;
`
export default function SocialLogin() {
return (
  <Container>
    <KaKao>카카오톡 계정으로 로그인</KaKao>
    <Google>구글 계정으로 로그인</Google>
    <Facebook>페이스북 계정으로 로그인</Facebook>
    <div>
      <TextBtn>페이스북 계정으로 로그인</TextBtn>
      <Span>|</Span>
      <TextBtn>회원가입</TextBtn>
    </div>
  </Container>
)
}
