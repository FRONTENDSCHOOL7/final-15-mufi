import React, { useEffect } from 'react';
import * as S from './SplashStyle';
import { useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  
  useEffect(()=>{
    document.addEventListener('click',()=>{
      navigate('/');
    })

    return ()=>{
      document.removeEventListener('click', ()=>{
        navigate('/');
      })
    }
  }, [])

  return (
    <S.Layout>
    </S.Layout>
  );
}
