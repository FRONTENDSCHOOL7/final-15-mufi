import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPartialPostAPI } from '../../api/getPartialPostAPI';
import { getAllPostAPI } from '../../api/getAllPostAPI'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isLoadingState, userTokenState } from '../../Atoms/atoms';
import { Layout } from '../../components/Layout/LayoutStyle';
import PostList from '../../components/post/PostList';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader'
import NavBar from '../../components/navBar/NavBar';
import Loading from './Loading';
import * as S from './SearchedStyle';

import { postMoreState } from '../../Atoms/atoms';
import MoreModal from '../../components/moreModal/MoreModal';

export default function Searched() {
  const {keyword} = useParams();
  // console.log(keyword); // 박재범
  
  const token = useRecoilValue(userTokenState);
  const number = 2000;
  
  const [dataPost, setDataPost] = useState([]);
  const [isModalOpen, setIsModalOpen] = useRecoilState(postMoreState);
  const [isLoading, setIsLoading] = useRecoilState(isLoadingState);

  useEffect(()=>{
    const getDataPost = async () => {
      setIsLoading(true);
      // let tempDataPost = await getAllPostAPI({token});
      let tempDataPost = await getPartialPostAPI({token, number});

      // ----- 게시글 필터 -----
      tempDataPost = tempDataPost.filter(v => {
        let content = JSON.stringify(v.content);
        if(content === undefined){
          content = '';
        }
        if(content.indexOf(keyword) !== -1){
          return true;
        } else {
          return false;
        }
      })
      // ----- 게시글 필터 끝 -----

      // ---- 데이터 형태 수정 ----
      tempDataPost = tempDataPost.map(v=>{
        const {_id, ...newData} = v;
        newData.id = v._id;
        newData.commentCount = v.comments.length;
        newData.hearted = true;
        delete newData._id;
        return newData;
      })
      // ---- ----

      setDataPost(tempDataPost);
      setIsLoading(false);
    };
    getDataPost();
  },[]);

  return (
    <Layout>
      <GoBackMoreHeader content={`'${keyword}' 검색결과`}/>
      <S.SLayout>
        {/* <Loading keyword={keyword}></Loading> */}
        {isLoading ? 
        <Loading keyword={keyword}/> 
        : <PostList dataPost={dataPost}></PostList>}
      </S.SLayout>
      { isModalOpen && <MoreModal></MoreModal> }
      <NavBar />
    </Layout>

  )
}
