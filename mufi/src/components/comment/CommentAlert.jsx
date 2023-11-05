import React, { useState } from 'react';
import * as CA from './CommentAlertStyle';

import { deleteCommentAPI } from '../../api/comment/deleteCommentAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../Atoms/atoms';
import ReportCommentAlert from './ReportCommentAlert';

export default function CommentAlert({
  setIsAlertOpen,
  content,
  commentId,
  postId,
  onCommentDelete,
  setIsModalOpen,
}) {
  const token = useRecoilValue(userTokenState);
  const [isReported, sestIsReported] = useState(false);

  // 삭제!
  const deleteComment = () => {
    console.log('삭제');
    deleteCommentAPI({ postId, token, commentId }).then((data) =>
      console.log(data)
    );
    setIsModalOpen(false);
    // onCommentDelete();
  };

  // 신고!
  const reportComment = () => {
    console.log('신고');
    sestIsReported(true);
  };

  // 삭제, 신고 버튼 클릭시
  const OnBtnClick = () => {
    if (content === '삭제') {
      deleteComment();
    } else if (content === '신고') {
      reportComment();
    }
  };
  return (
    <>
      <CA.AlertCommentWrapper>
        <CA.DeleteComment>{content}할까요?</CA.DeleteComment>
        <CA.DivButton>
          <CA.CancelButton onClick={() => setIsAlertOpen(false)}>
            취소
          </CA.CancelButton>
          <CA.DeleteButton onClick={OnBtnClick}>{content}</CA.DeleteButton>
        </CA.DivButton>
      </CA.AlertCommentWrapper>
      {isReported ? (
        <ReportCommentAlert setIsModalOpen={setIsModalOpen} />
      ) : null}
    </>
  );
}
