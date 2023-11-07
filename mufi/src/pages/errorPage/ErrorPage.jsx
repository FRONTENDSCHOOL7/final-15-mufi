import React from 'react';
import { Layout, StyledImg, StyledDiv } from './ErrorPageStyle';
import icon404Img from '../../assets/icon-404.png';
import BeforeButton from '../../components/BeforeButton';
import { Helmet } from 'react-helmet-async';

export default function ErrorPage() {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <Layout>
        <StyledImg src={icon404Img} alt="404 Error Icon" />
        <StyledDiv>페이지를 찾을 수 없습니다. :(</StyledDiv>
        <BeforeButton></BeforeButton>
      </Layout>
    </>
  );
}
