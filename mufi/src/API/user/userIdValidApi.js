import axios from 'axios';

// 2.5 계정 검사
export const userIdValidAPI = async (userId) => {
  const request = {
    user: {
      accountname: userId,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/accountnamevalid',
      request
    );
    return response.data;
  } catch (error) {
    console.log('계정 검증 API 요청 오류', error);
    return null;
  }
};
