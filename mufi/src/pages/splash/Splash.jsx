import React, { useEffect } from 'react';
import * as S from './SplashStyle';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    setTimeout(()=>{  
      window.location.replace('/')
    }, 3000)
  }, [])

  return (
    <S.Layout>
    </S.Layout>
  );
}
