import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPartialPostAPI } from '../../api/getPartialPostAPI';
import { getAllPostAPI } from '../../api/getAllPostAPI'
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../Atoms/atoms'
import PostList from '../../components/post/PostList';
import * as S from './SearchedStyle';

export default function Searched() {
  const {keyword} = useParams();
  console.log(keyword); // 박재범
  
  const token = useRecoilValue(userTokenState);
  const number = 50;

  const [dataPost, setDataPost] = useState([]);

  useEffect(()=>{
    const getDataPost = async () => {
      // let tempDataPost = await getAllPostAPI({token});
      let tempDataPost = await getPartialPostAPI({token, number});

      // ----- 게시글 필터 -----
      tempDataPost = tempDataPost.filter(v => {
        // console.log('v.content',v.content);
        let content = JSON.stringify(v.content);
        if(content === undefined){
          content = 'undefined'
        }
        // filter해주기
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
    <S.SLayout>
      <PostList dataPost={dataPost}></PostList>
    </S.SLayout>
  )
}
