import axios from 'axios';

// POST /post/:post_id/comments/:comment_id/report
// // 7.4 댓글 신고
export const reportCommentAPI = async ({ postId, commentId, token }) => {
  let response;

  const apiUrl = `post/${postId}/comments/${commentId}/report`;
  const method = 'POST';
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  };

  const option = {
    url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
    method: method,
    headers: reqHeaders,
  };

  await axios(option)
    .then((res) => {
      console.log(res);
      response = res;
    })
    .catch((error) => {
      console.log('댓글 신고 api 요청 오류', error);
      return null;
    });
  return response;
};
