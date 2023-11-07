import React, { useEffect } from 'react';
import * as S from './SplashStyle';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.location.replace('/');
    }, 3000);
  }, []);

  return (
    <>
      <Helmet>
        <title>MUFI...</title>
      </Helmet>
      <S.Layout></S.Layout>
    </>
  );
}
