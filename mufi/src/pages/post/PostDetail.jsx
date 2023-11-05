import React, { useEffect, useState, useCallback } from 'react';
import * as PD from './PostDetailStyle';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import PostItem from '../../components/post/PostItem';
import CommentInput from '../../components/comment/CommentInput';

// api 연결
import { useRecoilValue } from 'recoil';
import { userTokenState, accountnameState } from '../../Atoms/atoms';
import { getProfileInfoAPI } from '../../api/user/getProfileInfoAPI';
import { getPostDetailAPI } from '../../api/getPostDetailAPI';
import { getCommentAPI } from '../../api/comment/getCommentAPI';
import { useParams } from 'react-router-dom';
import UserComment from '../../components/comment/UserComment';

export default function PostDetail() {
  const { postId } = useParams();
  console.log(postId);

  const userToken = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const [postDetailItem, setPostDetailItem] = useState([]);
  const [profileImg, setProfileImg] = useState('');
  const [comments, setComments] = useState([]);
  console.log(postDetailItem);

  // 게시글 가져오기(절대 손대지 말 것)
  useEffect(() => {
    // 프로필 이미지(data.user.image) 요청
    getProfileInfoAPI(userToken).then((data) => {
      console.log(data); // 이건 제대로 뜬다
      setProfileImg(data.user.image);
    });
    // 게시글 가져오기
    const getPostDetail = async () => {
      const res = await getPostDetailAPI(userToken, postId);
      console.log(userToken);
      console.log(postId);
      setPostDetailItem([res]);
      console.log(res); // 제대로 들어옴
      console.log(typeof res); // object
    };
    getPostDetail();
  }, []);

  // const getComment = useCallback(async () => {
  //   try {
  //     const commentData = await getCommentAPI(postId);
  //     console.log('commentAll', commentData);
  //     setComments(commentData.comments);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, [postId]);

  // useEffect(() => {
  //   getComment();
  // }, [getComment]);

  // 댓글 가져오기
  useEffect(() => {
    getCommentAPI(postId).then((data) => {
      setComments(Array.from(data.comments));
    });
  }, []);

  // commentCount + 1
  const onCommentSubmit = () => {
    setPostDetailItem((prevData) => ({
      ...prevData,
      post: {
        ...prevData.post,
        commentCount: prevData.post.commentCount + 1,
      },
    }));
  };

  // 댓글 삭제 - 1
  const onCommentDelete = () => {
    setPostDetailItem((prevData) => ({
      ...prevData,
      post: {
        ...prevData.post,
        commentCount: prevData.post.commentCount - 1,
      },
    }));
  };

  return (
    <>
      <PD.PDLayout>
        <GoBackMoreHeader />
        <PD.Div>
          {postDetailItem && <PostItem dataPost={postDetailItem} />}
        </PD.Div>
        {/* 댓글 리스트 자리 */}
        <PD.CommentWrapper>
          {comments &&
            Array.from(comments).map((comment) => (
              <UserComment comment={comment} />
            ))}
        </PD.CommentWrapper>
        {/* 댓글 Input 자리 */}
        <CommentInput
          profileImg={profileImg}
          postId={postId}
          onCommentSubmit={onCommentSubmit}
        />
      </PD.PDLayout>
    </>
  );
}
