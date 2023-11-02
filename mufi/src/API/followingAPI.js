import axios from 'axios';

export const followingAPI = async ({ token, accountname }) => {
  let followingData = [];

  const apiUrl = `profile/${accountname}/following`;
  const method = 'get';
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
    'Content-type': 'application/json',
  };

  // option 설정
  const option = {
    url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
    method: method,
    headers: reqHeaders,
  };

  // option에 따라 api 연결
  await axios(option)
    .then((res) => {
      // console.log('팔로워 목록', res.data);
      followingData = res.data;
    })
    .catch((error) => {
      console.log('팔로잉 정보를 가져오는데 실패했습니다.', error);
      return null;
    });
  return followingData;
};
