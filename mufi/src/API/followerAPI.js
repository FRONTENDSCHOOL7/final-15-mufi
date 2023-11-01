import axios from 'axios';

export const followerAPI = async ({ token, accountname }) => {
  let followerData = [];

  const apiUrl = `profile/${accountname}/follower`;
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
      followerData = res.data;
    })
    .catch((error) => {
      console.log('팔로워 정보를 가져오는데 실패했습니다.', error);
      return null;
    });
  return followerData;
};
