import axios from 'axios';


export const uploadPostAPI = async ({token, post}) => {
  let resPost;
  
  const apiUrl = 'post';
  const method = 'POST';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  };
  const reqBody = {
    "post" : {
      content: post.content,
      image: post.image,
    }
  }

  // option 설정하기
  const option = {
    url: "https://api.mandarin.weniv.co.kr/"+apiUrl,
    method: method,
    headers: reqHeaders,
    data: reqBody,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => { // api연결 완료하면 수행할 동작
      console.log('data upload 하겠습니다~', res);
      resPost = res;
    })
    .catch((error) => { // 오류나면 수행할 동작
      console.log('data upload api 요청 오류', error);
      return null;
    })
  return resPost;
}