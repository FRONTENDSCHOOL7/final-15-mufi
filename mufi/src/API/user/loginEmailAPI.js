import axios from 'axios';

// 2.2 로그인
export const loginEmailAPI = async (email, password) => {
  const request = {
    user: {
      email,
      password,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const response = await axios.post(
      'https://api.mandarin.weniv.co.kr/user/login',
      request
    );

    //  undefined 일 때
    if (response.data) {
      return response.data;
    } else {
      return null;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
