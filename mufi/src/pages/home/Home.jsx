import React, { useEffect, useState } from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import NavBar from '../../components/navBar/NavBar'

import HomeEmpty from './HomeEmpty'
import HomeFeed from './HomeFeed'
import * as H from "./HomeStyle"
import { getPostAPI } from '../../api/getPostAPI'

// token 연결하기
import { useRecoilValue } from 'recoil'
import { userTokenState } from '../../Atoms/atoms'
import { postMoreState } from '../../Atoms/atoms'
import MoreModal from '../../components/moreModal/MoreModal';

const Home = () => {
  const [postData,setPostData] = useState([]);
  
  // Recoil에서 token 받아오기
  const token = useRecoilValue(userTokenState);
  const isModalOpen = useRecoilValue(postMoreState);
  
  // 마운트 될때 api 받아올 수 있게, await은 async안에서만 사용할 수 있으므로 새로 함수를 선언해서 바로 실행하기
  useEffect(()=>{
    const getPostList = async () => {
      const res = await getPostAPI(token);
      setPostData(res);
    }
    getPostList();
  },[])

  return (
    <>
      <H.HLayout>
        <HomeHeader />
        { postData.length !== 0 ? <HomeFeed postData={postData}></HomeFeed> : <HomeEmpty />}
        <NavBar></NavBar>
        { isModalOpen && <MoreModal></MoreModal> }
      </H.HLayout>

      {/* 잔망 */}
      <button onClick={() => {
        const li = document.querySelectorAll('li');
        li.forEach(v=>v.classList.toggle('cardUI'))
      }}>cardui만들기</button>
    </>
  )
}

export default Home;