import axios from 'axios';

export const profileAPI = async (token) => {
  let profileData = [];
  console.log(token);
  const apiUrl = 'user/myinfo';
  const method = 'get';
  const reqHeaders = {
    Authorization: `Bearer ${token}`,
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
      console.log('사용자 프로필 받아오기', res.data);
      profileData = res.data.user;
    })
    .catch((error) => {
      console.log('프로필 정보를 가져오는데 실패했습니다.', error);
      return null;
    });
  return profileData;
};
