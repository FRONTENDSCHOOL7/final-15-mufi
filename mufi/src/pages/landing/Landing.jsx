import React from 'react'
import * as L from './LandingStyle'
import logoFull from '../../assets/logo-full.png'
import SocialLogin from './SocialLogin'

export default function Landing() {
  return (
    <>
      <L.Layout>
        <L.Logo src={logoFull} alt='MUFI'/>
        <L.nextBtn type='button'>이메일로 로그인</L.nextBtn>
        <L.nextBtn type='button'>다른 방법으로 로그인</L.nextBtn>
        <L.divText>
          <L.desc>아직 회원이 아니신가요?</L.desc>
          <L.textBtn>회원가입</L.textBtn>
        </L.divText>
      </L.Layout> 
      <SocialLogin></SocialLogin> 
    </>
  )
}
