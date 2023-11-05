import React, { useEffect, useState } from 'react';
import * as CI from './CommentInputStyle';
import ProfileBasicImg from '../../assets/basic-profile-small.png';

// api 연결
import { userTokenState } from '../../Atoms/atoms';
import { useRecoilValue } from 'recoil';
import { postCommentAPI } from '../../api/comment/postCommentAPI';
import { getProfileInfoAPI } from '../../api/user/getProfileInfoAPI';
import { useParams } from 'react-router-dom';

export default function CommentInput({ 
  onCommentSubmit, 
  inputComment, 
  setInputComment }) {
  const { postId } = useParams();
  const [userImg, setUserImg] = useState('');
  

  const [disabled, setDisabled] = useState(true);

  const userToken = useRecoilValue(userTokenState);

  useEffect(() => {
    getProfileInfoAPI(userToken).then((data) => {
      setUserImg(data.user.image);
    });
  });

  const comment = { content: inputComment };

  const onChange = (e) => {
    setInputComment(e.target.value);
    if (e.target.value.length > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const postComment = async () => {
    const content = comment.content;
    const token = userToken;
    const res = await postCommentAPI({token, content, postId});
    // console.log('내용' + content);
    // console.log('토큰' + token);
    // console.log('아이디' + postId);
    setInputComment(res);
  };

  const onSubmit = async () => {
    await postComment();
    setInputComment('');
    setDisabled(true);
    onCommentSubmit();
  };

  return (
    <>
      <CI.Wrapper>
        <CI.UserImg
          src={userImg ? userImg : ProfileBasicImg}
          alt="프로필 사진"
        />
        <CI.Input
          placeholder="댓글 입력하기..."
          value={inputComment}
          onChange={onChange}
        />
        <CI.PostBtn onClick={onSubmit} disabled={disabled}>
          게시
        </CI.PostBtn>
      </CI.Wrapper>
    </>
  );
}
