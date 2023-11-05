import axios from 'axios';

export const profileChangeAPI = async ({ token, user }) => {
  let profileData = [];
  console.log(token, user);
  const apiUrl = 'user'; 
  const method = 'put';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
  };

  const username = user.userName;
  const accountname = user.userid;
  const intro = user.introduction;
  const image = user.imgSrc;

  console.log(username, accountname, 'intro', intro, image);
  const reqBody = {
    user: {
      username,
      accountname,
      intro,
      image,
    }
  }
  
  const option = {
    url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
    method: method,
    headers: reqHeaders,
    data: reqBody
  };


  await axios(option)
    .then((res) => { 
      console.log(res);
      profileData = res; 
    })
    .catch((error) => {
      console.log('프로필 수정 오류', error);
      return null;
    })

  return profileData;
};
