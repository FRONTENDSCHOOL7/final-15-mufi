import React from 'react'
import * as S from './SplashStyle'
import logoFull from '../../assets/logo-full.png'

export default function Splash() {
  return (
    <S.Layout>
      <S.Logo src={logoFull}></S.Logo>
    </S.Layout>
  );
}
