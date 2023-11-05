import axios from 'axios';

// 2.1 회원가입
export const profileChangeAPI = async ({ token, user }) =>{

  console.log(token, user);
  const username = "haha123456";
  const accountname = "haha123456";
  const intro = "안녕안녕";
  const image = "12345";
  const request = {
    user: {
      username,
      accountname,
      intro,
      image,
    },
    headers: {
      "Authorization" : `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  };

  try {
    const response = await axios.put(
      'https://api.mandarin.weniv.co.kr/user',
      request
    );

    console.log(response);
    return response.data;
  } catch (error) {
    console.log('회원가입 API 요청 오류', error);
    return null;
  }
};


// import axios from 'axios';


// export const profileChangeAPI = async ({ token, user }) => {
//   let profileData = [];
// console.log(token, user);
//   const apiUrl = 'user'; 
//   const method = 'put';
//   const reqHeaders = {
//     "Authorization" : `Bearer ${token}`,
//   };

//    const reqBody = {
//     "user":{
//                 "username": "haha123456",
//                 "accountname": "haha123456",
//                 "intro": "안녕안녕",
//                 "image": ""
//         }
//    }; 
 
//   const option = {
//     url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
//     method: method,
//     headers: reqHeaders,
//     data: JSON.stringify(reqBody)
//   };


//   await axios(option)
//     .then((res) => { 
//       console.log(res);
//       profileData = res; 
//     })
//     .catch((error) => {
//       console.log('프로필 수정 오류', error);
//       return null;
//     })

//   return profileData;
// };


// export const updateProfile = async (token, formData) => {
//   let updateResponse = {};

//   const apiUrl = '/profile/update'; 
//   const method = 'post';
//   const reqHeaders = {
//     "Authorization" : `Bearer ${token}`,
//     "Content-type" : "application/json"
//   };


//   const option = {
//     url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
//     method: method,
//     headers: reqHeaders,
//     data: formData 
//   };


//   await axios(option)
//     .then((res) => { 
//       updateResponse = res.data; 
//     })
//     .catch((error) => {
//       console.log('프로필 업데이트 요청 오류', error);
//       return null;
//     })
//   return updateResponse;
// };