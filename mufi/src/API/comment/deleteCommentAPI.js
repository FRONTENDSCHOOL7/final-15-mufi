import axios from 'axios';
import { authAxios } from '../authoAxios';

// 7.3 댓글 삭제
export const deleteCommentAPI = async ({ postId, commentId }) => {
  const request = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}`,
      request
    );
    return response.data;
  } catch (error) {
    console.error('댓글 삭제 API 요청 에러', error);
  }
};
