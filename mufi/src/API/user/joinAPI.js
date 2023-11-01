import axios from 'axios';

// 2.1 회원가입
export const joinAPI = async (
  username,
  email,
  password,
  accountname,
  intro,
  image
) => {
  const request = {
    user: {
      username,
      email,
      password,
      accountname,
      intro,
      image,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user',
      request
    );
    return response.data;
  } catch (error) {
    console.log('회원가입 API 요청 오류', error);
    return null;
  }
};
