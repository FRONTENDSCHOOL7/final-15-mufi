import axios from 'axios';

// 7.1 댓글 작성
export const postCommentAPI = async (content, postId) => {
  let postComment;

  const apiUrl = `post/${postId}/comments`;
  const method = 'post';
  const reqHeaders = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
    'Content-type': 'application/json',
  };
  const body = {
    comment: {
      content: content,
    },
  };

  const option = {
    url: 'https://api.mandarin.weniv.co.kr/' + apiUrl,
    method: method,
    headers: reqHeaders,
    data: body,
  };

  await axios(option)
    .then((res) => {
      console.log(res);
      postComment = res.data.comment;
    })
    .catch((error) => {
      console.log('댓글 올리기 api 요청 오류', error);
      return null;
    });
  return postComment;
};

// 이거 성공,, 근데 뭔가 이상해,,
// import axios from 'axios';
// import { authAxios } from '../authoAxios';

// // 7.1 댓글 가져오기
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

// import axios from 'axios';

// export const postCommentAPI = async (postId, commentContent, token) => {
//   try {
//     //오류나면 {sendData} 이렇게 감싸보기
//     const response = await axios.post(
//       `https://api.mandarin.weniv.co.kr/post/${postId}/comments`,
//       commentContent,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-type': 'application/json',
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     console.error('댓글 업로드 API 요청 에러', error);
//   }
// };
