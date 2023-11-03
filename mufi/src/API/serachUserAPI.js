import axios from 'axios';

export const searchUserAPI = async ({ token, keyword }) => {
  let response;

  const apiUrl = `user/searchuser/?keyword=${keyword}`;
  const method = 'GET';
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
      // console.log('검색검색', res);
      response = res.data;
    })
    .catch((error) => {
      console.log('api 요청 오류', error);
      return null;
    })
  return response;
}