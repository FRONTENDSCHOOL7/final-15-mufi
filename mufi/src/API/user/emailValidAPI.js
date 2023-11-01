import axios from 'axios';

// 2.4 이메일 검증
export const emailValidAPI = async (userEmail) => {
  const request = {
    user: {
      email: userEmail,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/emailvalid',
      request
    );
    return response.data;
  } catch (error) {
    console.log('이메일검증 API 요청 오류', error);
    return null;
  }
};
