import React from 'react';
import * as S from './SplashStyle';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  document.addEventListener('click',()=>{
    navigate('/');
  })

  return (
    <S.Layout>
    </S.Layout>
  );
}
