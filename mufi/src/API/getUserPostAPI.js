import axios from 'axios';

export const getUserPostAPI = async ({ token, accountname}) => {
  console.log(token);
  console.log(accountname, 'accountname')
  let dataPost = [];

  const apiUrl = `post/${accountname}/userpost`;
  const method = 'get';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  };

  // option 설정하기
  const option = {
    url: "https://api.mandarin.weniv.co.kr/"+apiUrl,
    method: method,
    headers: reqHeaders,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => { // api연결 완료하면 수행할 동작
      // console.log('dataPost받아오고싶어용', res.data);
      dataPost = res.data.post;
    })
    .catch((error) => { // 오류나면 수행할 동작
      console.log('특정 유저 게시글 불러오기 api 요청 오류', error);
      return null;
    })
  return dataPost
}