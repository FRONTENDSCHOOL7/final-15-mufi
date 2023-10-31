import axios from 'axios'

export const loginAPI  = async (username='example@exam.ple', password='123123') => {
  let userToken = '';

  const option = {
    url: "https://api.mandarin.weniv.co.kr/user/login",
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    data: {
      user: {
      email: username,
      password: password,
      },
    },
  };

  await axios(option)
    .then(async (res) => {
      if(res.data.status === 422){
        console.log('아이디,비밀번호를 확인해주세요!')
        return userToken;
      }
      console.log(res.data.user.username + "님 안녕하세요");
      userToken = (res.data.user.token);
      return userToken;
    })
    .catch((err) => console.error('로그인오류발생',err));
  
  return userToken;
}