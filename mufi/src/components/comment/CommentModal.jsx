import React, { useEffect, useState } from 'react';
import * as CM from './CommentModalStyle';
import CommentAlert from './CommentAlert';

export default function CommentModal({
  setIsModalOpen,
  isMyComment,
  commentId,
  postId,
  OnCommentDelete,
}) {
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [content, setContent] = useState('신고');

  useEffect(() => {
    if (isMyComment) {
      setContent('삭제');
    } else {
      setContent('신고');
    }
  }, [isMyComment]);

  return (
    <>
      <CM.Container onClick={() => setIsModalOpen(false)}></CM.Container>
      <CM.Ul>
        <CM.Line></CM.Line>
        <CM.Li>
          <CM.Button onClick={() => setIsAlertOpen(true)}>{content}</CM.Button>
        </CM.Li>
      </CM.Ul>
      {isAlertOpen ? (
        <CommentAlert
          setIsAlertOpen={setIsAlertOpen}
          content={content}
          commentId={commentId}
          postId={postId}
          OnCommentDelete={OnCommentDelete}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
}
