import axios from 'axios';

// 7.1 댓글 작성
export const postCommentAPI = async ({ token, content, postId }) => {
  content = JSON.stringify(content).slice(1, -1);
  let dataComment = [];

  const apiUrl = `post/${postId}/comments`;
  const method = 'POST';
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  };
  const reqBody = {
    comment: {
      content,
    },
  };

  // option 설정하기
  const option = {
    url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
    method: method,
    headers: reqHeaders,
    data: reqBody,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => {
      // console.log(res);
      dataComment = res;
    })
    .catch((error) => {
      console.log('댓글 업로드 api 요청 오류', error);
      return null;
    });
  return dataComment;
};
