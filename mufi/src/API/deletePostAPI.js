import axios from 'axios';

export const deletePostAPI = async ({ token, postId}) => {
  console.log(token);
  console.log(postId);
  let response;

  const apiUrl = `post/${postId}`;
  const method = 'DELETE';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  };

  // option 설정하기
  const option = {
    url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
    method: method,
    headers: reqHeaders,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => { 
      // console.log('게시글 삭제 성공~!', res)
      response = res;
    })
    .catch((error) => {
      console.log('게시글 삭제 api 요청 오류', error);
      return null;
    })
  return response;
}