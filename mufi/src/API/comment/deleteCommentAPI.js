import axios from 'axios';

// /post/:post_id/comments/:comment_id
// 7.3 댓글 삭제
export const deleteCommentAPI = async ({ postId, commentId, token }) => {
  let response;

  const apiUrl = `post/${postId}/comments/${commentId}`;
  const method = 'DELETE';
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
      console.log('댓글 삭제 api 요청 오류', error);
      return null;
    });
  return response;
};
