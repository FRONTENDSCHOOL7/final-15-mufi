import axios from 'axios';

// 7.2 댓글 리스트
export const getCommentAPI = async (postId) => {
  const request = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-type': 'application/json',
    },
  };

  try {
    const response = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/${postId}/comments`,
      request
    );
    return response.data;
  } catch (error) {
    console.error('댓글 리스트 가져오기 API 요청 에러', error);
  }
};
