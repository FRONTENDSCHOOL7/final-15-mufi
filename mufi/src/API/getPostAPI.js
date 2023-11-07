import axios from 'axios';

export const getPostAPI = async ( token ) => {
  let dataPost = [];

  const apiUrl = 'post/feed?limit=20&skip=0';
  const method = 'get';
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
      dataPost = res.data.posts;
    })
    .catch((error) => {
      console.log('팔로잉한 사람 게시글 불러오기 api 요청 오류', error);
      return null;
    })
  return dataPost
}