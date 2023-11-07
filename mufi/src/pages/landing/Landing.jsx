import React, { useState } from 'react';
import * as L from './LandingStyle';
import logoFull from '../../assets/logo-full.png';
import SocialLogin from './SocialLogin';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Landing() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onEmailLogin = (e) => {
    navigate('/login');
  };

  const onSocialLogin = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  const onJoin = () => {
    navigate('/join');
  };

  return (
    <>
      <Helmet>
        <title>Welcome MUFI</title>
      </Helmet>
      <L.Layout>
        {isModalOpen || <L.Logo src={logoFull} alt="MUFI" />}
        {isModalOpen && <L.LogoUp src={logoFull} alt="MUFI" />}
        <L.nextBtn type="button" onClick={onEmailLogin}>
          이메일로 로그인
        </L.nextBtn>
        <L.nextBtn type="button" onClick={onSocialLogin}>
          다른 방법으로 로그인
        </L.nextBtn>
        {isModalOpen && (
          <SocialLogin
            className="social-login"
            props={{ isModalOpen, setIsModalOpen, onEmailLogin, onJoin }}
          ></SocialLogin>
        )}
        <L.divText>
          <L.desc>아직 회원이 아니신가요?</L.desc>
          <L.textBtn onClick={onJoin}>회원가입</L.textBtn>
        </L.divText>
      </L.Layout>
    </>
  );
}
