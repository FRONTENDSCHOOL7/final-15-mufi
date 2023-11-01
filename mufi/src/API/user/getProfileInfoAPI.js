import axios from 'axios';

// 2.3 프로필 정보 불러오기
export const getProfileInfoAPI = async (token) => {
  const request = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.get(
      'https://api.mandarin.weniv.co.kr/user/myinfo',
      request
    );

    return response.data;
  } catch (error) {
    console.log('프로필 정보 불러오기 API 요청 오류', error);
    return null;
  }
};
