import axios from 'axios';
import { authAxios } from '../authoAxios';

// // 7.4 댓글 신고
export const reportCommentAPI = async ({ postId, commentId }) => {
  const request = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments/${commentId}/report`,
      request
    );
    return response.data;
  } catch (error) {
    console.error('댓글 신고 API 요청 에러', error);
  }
};
