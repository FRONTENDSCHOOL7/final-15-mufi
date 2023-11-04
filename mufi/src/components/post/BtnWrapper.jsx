import React, { useEffect, useRef, useState } from 'react';
import * as P from '../../components/post/PostStyle';
import { useNavigate } from 'react-router-dom';
import { plusLikeAPI } from '../../api/plusLikeAPI';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../../Atoms/atoms';
import { cancelLikeAPI } from '../../api/cancelLikeAPI';

export default function BtnWrapper({heartCount, commentNum, postId, isHearted}) {
  const navigate = useNavigate();

  const token = useRecoilValue(userTokenState);
  const heart = useRef();
  const [likedNum, setLikedNum] = useState(heartCount);
  const [isLiked, setIsLiked] = useState(isHearted);

  const moveToComment = () => {
    navigate('');
  };

  const like = async () => {
    await plusLikeAPI({token, postId});
    setLikedNum(likedNum+1);
    setIsLiked(true);
  }

  const cancellike = async () => {
    await cancelLikeAPI({token, postId});
    setLikedNum(likedNum-1);
    setIsLiked(false);
  }

  const handleBtnLike = async (e) => {
    e.target.classList.toggle('liked');
    e.target.classList.toggle('unliked');
    if (isLiked) {
      cancellike();
    } else if (!isLiked) {
      like();
    }
  }

  return (
    <>
        <P.BtnWrapper>
            <P.BtnLike ref={heart} className={ isLiked ? "liked" : "unliked"} onClick={handleBtnLike}>{ likedNum }</P.BtnLike>
            <P.BtnComment onClick={moveToComment}>{commentNum}</P.BtnComment>
        </P.BtnWrapper>
    </>
  )
}
