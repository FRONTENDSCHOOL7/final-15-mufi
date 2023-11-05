import axios from 'axios';

export const followStateAPI = async ({ token, accountname }) => {
  let followData = {};

  const apiUrl = `profile/${accountname}/follow`;
  const method = 'post';
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
      // console.log('팔로우 상태 변경', res.data);
      followData = res.data;
    })
    .catch((error) => {
      console.log('팔로우 상태를 변경하는데 실패했습니다.', error);
      return null;
    });

  return followData;
};
