import axios from 'axios';

export const getPostDetailAPI = async (token, id) => {
  let postDetail;

  const apiUrl = `post/${id}`;
  const method = 'get';
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
      postDetail = res.data.post;
    })
    .catch((error) => {
      console.log('게시글 상세 불러오기 api 요청 오류', error);
      return null;
    });
  return postDetail;
};
