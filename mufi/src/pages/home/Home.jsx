import React, { useEffect, useState } from 'react';
import HomeHeader from '../../components/headers/HomeHeader';
import NavBar from '../../components/navBar/NavBar';

import HomeEmpty from './HomeEmpty';
import HomeFeed from './HomeFeed';
import * as H from './HomeStyle';
import { getPostAPI } from '../../api/getPostAPI';

// token 연결하기
import { useRecoilState, useRecoilValue } from 'recoil';
import { userTokenState } from '../../Atoms/atoms';
import { postMoreState } from '../../Atoms/atoms';
import MoreModal from '../../components/moreModal/MoreModal';

import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [postData, setPostData] = useState([]);

  // Recoil에서 token 받아오기
  const token = useRecoilValue(userTokenState);
  const [isModalOpen, setIsModalOpen] = useRecoilState(postMoreState);

  // 마운트 될때 api 받아올 수 있게, await은 async안에서만 사용할 수 있으므로 새로 함수를 선언해서 바로 실행하기
  useEffect(() => {
    setIsModalOpen(false);
    const getPostList = async () => {
      const res = await getPostAPI(token);
      setPostData(res);
    };
    getPostList();
  }, []);

  return (
    <>
      <Helmet>
        <title>HOME</title>
      </Helmet>
      <H.HLayout>
        <HomeHeader />
        {postData.length !== 0 ? (
          <HomeFeed postData={postData}></HomeFeed>
        ) : (
          <HomeEmpty />
        )}
        {isModalOpen && <MoreModal></MoreModal>}
        <NavBar></NavBar>
      </H.HLayout>
      {/* <button style={{position:absolute}} onClick={() => {
        const li = document.querySelectorAll('li');
        li.forEach(v=>v.classList.toggle('cardUI'))
      }}>cardui만들기</button> */}
    </>
  );
};

export default Home;
