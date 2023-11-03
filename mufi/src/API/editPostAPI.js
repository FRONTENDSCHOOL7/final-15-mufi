import axios from 'axios';

export const editPostAPI = async ({ token, postId, post }) => {
  let response;

  const apiUrl = `post/${postId}`
  const method = 'PUT';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  };
  const body = {
    "post": {
      "content": post.content,
      "image": post.image
    }
  }

  // option 설정하기
  const option = {
    url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
    method: method,
    headers: reqHeaders,
    data: body
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => { 
      // console.log('edit성공~!', res)
      response = res;
    })
    .catch((error) => { 
      console.log('게시글 수정 api 요청 오류', error);
      return null;
    })
  return response
}