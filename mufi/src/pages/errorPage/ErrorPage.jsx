import React, { useState } from 'react';
import {
  Layout
} from './ErrorPageStyle';
import icon404Img from '../../assets/icon-404.png';

export default function ErrorPage() {
  return (
    <Layout>
        <img src={icon404Img} alt="404 Error Icon" />
    <div>페이지를 찾을 수 없습니다. :(</div>
    </Layout>
  )
}
