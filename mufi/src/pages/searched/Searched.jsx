import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPartialPostAPI } from '../../api/getPartialPostAPI';
import { getAllPostAPI } from '../../api/getAllPostAPI'
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../Atoms/atoms';
import { Layout } from '../../components/Layout/LayoutStyle';
import PostList from '../../components/post/PostList';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader'
import NavBar from '../../components/navBar/NavBar';
import * as S from './SearchedStyle';

export default function Searched() {
  const {keyword} = useParams();
  console.log(keyword); // 박재범
  
  const token = useRecoilValue(userTokenState);
  const number = 20;

  const [dataPost, setDataPost] = useState([]);

  useEffect(()=>{
    const getDataPost = async () => {
      // let tempDataPost = await getAllPostAPI({token});
      let tempDataPost = await getPartialPostAPI({token, number});

      // ----- 게시글 필터 -----
      tempDataPost = tempDataPost.filter(v => {
        let content = JSON.stringify(v.content);
        if(content.indexOf(keyword) !== -1){
          return true;
        } else {
          return false;
        }
      })
      // ----- 게시글 필터 끝 -----

      setDataPost(tempDataPost);
    };
    getDataPost();
  },[]);

  return (
    <Layout>
      <GoBackMoreHeader content={`'${keyword}' 검색결과`}/>
      <S.SLayout>
        <PostList dataPost={dataPost}></PostList>
      </S.SLayout>
      <NavBar />
    </Layout>

  )
}
