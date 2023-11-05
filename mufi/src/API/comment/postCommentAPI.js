import axios from 'axios';

// export const postCommentAPI = async ({ content, postId }) => {
//   const request = {
//     comment: {
//       content: content,
//     },
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`,
//       'Content-type': 'application/json',
//     },
//   };
//   try {
//     const response = await axios.post(
//       `https://api.mandarin.weniv.co.kr/post/${postId}/comments`,
//       request
//     );
//     return response.data;
//   } catch (error) {
//     console.error('댓글 업로드 API 요청 에러', error);
//   }
// };

// ---- 소희 방법 -----
export const postCommentAPI = async ({ token, content, postId }) => {
  content = JSON.stringify(content).slice(1, -1);
  let dataComment = [];

  const apiUrl = `post/${postId}/comments`;
  const method = 'POST';
  const reqHeaders = {
    "Authorization" : `Bearer ${token}`,
    "Content-type" : "application/json"
  };
  const reqBody = {
    comment: {
        content,
      }
  }

  // option 설정하기
  const option = {
    url: "https://api.mandarin.weniv.co.kr/" + apiUrl,
    method: method,
    headers: reqHeaders,
    data: reqBody,
  };

  // option에 따라 api 연결하기
  await axios(option)
    .then((res) => { 
      console.log(res);
      dataComment = res;
    })
    .catch((error) => {
      console.log('댓글 업로드 api 요청 오류', error);
      return null;
    })
  return dataComment
  }
// ---- 소희 방법 ----

// 7.1 댓글 작성
// export const postCommentAPI = async (content, postId) => {
//   let postComment;

//   const apiUrl = `post/${postId}/comments`;
//   const method = 'post';
//   const reqHeaders = {
//     Authorization: `Bearer ${localStorage.getItem('token')}`,
//     'Content-type': 'application/json',
//   };
//   const body = {
//     comment: {
//       content: content,
//     },
//   };

//   const option = {
//     url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
//     method: method,
//     headers: reqHeaders,
//     data: body,
//   };

//   await axios(option)
//     .then((res) => {
//       console.log(res);
//       postComment = res.data.comment;
//     })
//     .catch((error) => {
//       console.log('댓글 올리기 api 요청 오류', error);
//       return null;
//     });
//   return postComment;
// };

// 이거 성공,, 근데 뭔가 이상해,,
// import axios from 'axios';
// import { authAxios } from '../authoAxios';

// // 7.1 댓글 업로드
// export const postCommentAPI = async (postId, comment) => {
//   const commentData = {
//     comment: {
//       content: comment,
//     },
//   };
//   const response = await authAxios.post(
//     `/post/${postId}/comments`,
//     commentData
//   );
//   return response.data;
// };
