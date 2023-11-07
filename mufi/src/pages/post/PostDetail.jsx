import React, { useEffect, useState, useCallback } from 'react';
import * as PD from './PostDetailStyle';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import PostItem from '../../components/post/PostItem';
import CommentInput from '../../components/comment/CommentInput';

// api 연결
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  userTokenState,
  accountnameState,
  postMoreState,
} from '../../Atoms/atoms';
import { getProfileInfoAPI } from '../../api/user/getProfileInfoAPI';
import { getPostDetailAPI } from '../../api/getPostDetailAPI';
import { getCommentAPI } from '../../api/comment/getCommentAPI';
import { useParams } from 'react-router-dom';
import UserComment from '../../components/comment/UserComment';

//modal
import ModalDetail from '../../components/moreModal/ModalDetail';

export default function PostDetail() {
  const { postId } = useParams();
  const [isModalOpen, setIsModalOpen] = useRecoilState(postMoreState);

  const token = useRecoilValue(userTokenState);
  const accountname = useRecoilValue(accountnameState);
  const [postDetailItem, setPostDetailItem] = useState([]);
  const [profileImg, setProfileImg] = useState('');
  const [comments, setComments] = useState([]);
  const [inputComment, setInputComment] = useState('');

  // 게시글 가져오기
  useEffect(() => {
    // 프로필 이미지(data.user.image) 요청
    getProfileInfoAPI(token).then((data) => {
      setProfileImg(data.user.image);
    });
    // 게시글 가져오기
    setIsModalOpen(false);
    const getPostDetail = async () => {
      const res = await getPostDetailAPI({ token, postId });
      setPostDetailItem([res]);
    };
    getPostDetail();
  }, []);

  // 댓글 가져오기
  useEffect(() => {
    getCommentAPI({ token, postId }).then((data) => {
      if (data) {
        setComments(Array.from(data.comments));
      }
    });
  }, [comments]);

  // 댓글 게시 commentCount + 1
  const onCommentSubmit = () => {
    const tempDetail = {
      ...postDetailItem[0],
      comments: [...postDetailItem[0].comments, inputComment],
      commentCount: postDetailItem[0].commentCount + 1,
    };
    // console.log('tempDetail!!!!----', tempDetail);
    // console.log(postDetailItem[0]);
    setPostDetailItem([tempDetail]);
  };

  // 댓글 삭제 - 1
  const onCommentDelete = () => {
    const tempDetailD = {
      ...postDetailItem[0],
      commentCount: postDetailItem[0].commentCount - 1,
    };
    setPostDetailItem([tempDetailD]);
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
            Array.from(comments)
              .reverse()
              .map((comment) => (
                <UserComment
                  comment={comment}
                  postId={postId}
                  onCommentDelete={onCommentDelete}
                />
              ))}
        </PD.CommentWrapper>
        {/* 댓글 Input 자리 */}
        <CommentInput
          profileImg={profileImg}
          postId={postId}
          onCommentSubmit={onCommentSubmit}
          inputComment={inputComment}
          setInputComment={setInputComment}
        />
        {isModalOpen && <ModalDetail />}
      </PD.PDLayout>
    </>
  );
}
