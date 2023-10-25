import React from 'react';
import { Layout, StyledImg, StyledDiv } from './ErrorPageStyle';
import icon404Img from '../../assets/icon-404.png';
import BeforeButton from '../../components/BeforeButton'

export default function ErrorPage() {
  return (
    <Layout>
      <StyledImg src={icon404Img} alt="404 Error Icon" />
      <StyledDiv>페이지를 찾을 수 없습니다. :(</StyledDiv>
      <BeforeButton></BeforeButton>
    </Layout>
  )
}
