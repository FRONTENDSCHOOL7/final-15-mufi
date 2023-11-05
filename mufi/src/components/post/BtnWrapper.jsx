import React, { useState } from 'react';
import * as P from '../../components/post/PostStyle';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function BtnWrapper({ like, commentNum }) {
  const { postId } = useParams();

  const [isLiked, setIsLiked] = useState(false);
  const handleBtnLike = (e) => {
    setIsLiked(!isLiked);
    if (isLiked) {
      e.target.classList.add('liked');
      like++;
    } else {
      e.target.classList.remove('liked');
    }
  };

  const navigate = useNavigate();
  const moveToComment = () => {
    navigate();
  };

  return (
    <>
      <P.BtnWrapper>
        <P.BtnLike onClick={handleBtnLike}>{like}</P.BtnLike>
        <P.BtnComment onClick={moveToComment}>{commentNum}</P.BtnComment>
      </P.BtnWrapper>
    </>
  );
}
