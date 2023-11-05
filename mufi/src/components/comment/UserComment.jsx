import React, { useEffect, useState } from 'react';
import * as UC from './UserCommentStyle';
import IconMore from '../../assets/icon-more-vertical-small.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { accountnameState } from '../../Atoms/atoms';
import CommentModal from './CommentModal';

export default function UserComment({ comment, postId, OnCommentDelete }) {
  const navigate = useNavigate();
  const [isMyComment, setIsMyComment] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const accountname = useRecoilValue(accountnameState);
  useEffect(() => {
    if (comment.author.accountname === accountname) {
      setIsMyComment(true);
    }
  }, [comment.author.accountname, accountname]);

  // 댓글 시간 계산
  const createdAt = comment.createdAt; // 밀리초의 형태
  const createDate = new Date(createdAt); // 올린 시간
  const nowDate = new Date(); // 현재 시간
  const diffDate = nowDate - createDate; // 시간 차이 계산
  const seconds = Math.floor(diffDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const [commentDate, setCommentDate] = useState('');
  useEffect(() => {
    if (minutes === 0) {
      setCommentDate('방금');
    } else if (hours < 1) {
      setCommentDate(`${minutes}분`);
    } else if (days < 1) {
      setCommentDate(`${hours}시간`);
    } else {
      const year = createDate.getFullYear();
      const month = ('0' + (createDate.getMonth() + 1)).slice(-2);
      const day = ('0' + createDate.getDate()).slice(-2);
      const createdDateDetail = `${year}년 ${month}월 ${day}일 `;
      setCommentDate(createdDateDetail);
    }
  }, [comment]);

  return (
    <>
      <UC.Wrapper>
        <UC.UserImg
          src={comment.author.image}
          onClick={() => navigate(`/profile/${comment.author.id}`)}
        />
        <UC.Content>
          <UC.Container>
            <UC.UserName>{comment.author.username}</UC.UserName>
            <UC.CommentTime>{commentDate}</UC.CommentTime>
            <UC.MoreIcon onClick={showModal}>
              <img src={IconMore} alt="더보기" />
            </UC.MoreIcon>
          </UC.Container>
          <UC.Comment>{comment.content}</UC.Comment>
        </UC.Content>
      </UC.Wrapper>
      {isModalOpen ? (
        <CommentModal
          setIsModalOpen={setIsModalOpen}
          isMyComment={isMyComment}
          commentId={comment.id}
          postId={postId}
          OnCommentDelete={OnCommentDelete}
        />
      ) : null}
    </>
  );
}
