import axios from 'axios';

// 7.2 댓글 리스트
export const getCommentAPI = async ({ token, postId }) => {
  let dataComment = [];

  const apiUrl = `post/${postId}/comments/?limit=20&skip=0`;
  const method = 'GET';
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  };

  // option 설정하기
  const option = {
    url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
    method: method,
    headers: reqHeaders,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => {
      dataComment = res.data;
    })
    .catch((error) => {
      console.log('댓글 리스트 가져오기 api 요청 오류', error);
      return null;
    });
  return dataComment;
};
