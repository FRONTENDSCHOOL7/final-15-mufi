import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 390px;
  height: 100vh;
  /* background-color: #fff; */
  margin: auto;
  overflow: hidden;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f2f2;
`;

export const ProfilePageWrapper = styled.div`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none; // 스크롤 바 숨기기
  }
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  background-color: #fff;

  margin-bottom: 4px;
`;

export const Follow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  padding-top: 35px;
`;

export const Followers = styled.div`
  width: 50px;

  strong {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  p {
    margin-top: 6px;
    text-align: center;
    font-size: 10px;
    color: #767676;
  }
`;

export const BasicImg = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 1px solid #efefef;
  box-sizing: border-box;
  object-fit: cover;
`;

export const Followings = styled.div`
  strong {
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

  p {
    margin-top: 6px;
    text-align: center;
    font-size: 10px;
    color: #767676;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 17px 0 20px;

  strong {
    width: 70%;
    font-size: 16px;
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  span {
    color: #767676;
    font-size: 12px;
    margin: 6px 0;
  }

  p {
    color: #767676;
    font-size: 14px;
    margin-top: 17px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const RoundButton = styled.button`
  border: 0;
  outline: 0;
  background: none;
`;

// export const PostWrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   background-color: #fff;
// `;

// export const PostType = styled.div`
//   width: 100%;
//   height: 42px;
//   border: 0.5px solid var(--DBDBDB, #dbdbdb);
//   background: #fff;

//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
// `;

// export const ListPost = styled.button`
//   border: none;
//   background: none;
//   outline: 0;
//   height: 26px;
//   padding: 0;
// `;

// export const AlbumPost = styled.button`
//   border: none;
//   background: none;
//   outline: 0;
//   height: 26px;
//   padding: 0 16px;
// `;

export const ProfileMusicWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 53px;
  gap: 12px;

  background-color: #fff;
  margin-bottom: 4px;

  position: relative;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
`;

export const ImgPlay = styled.img`
  width: 40px;
  height: 40px;
`;

export const MusicBar = styled.img`
  width: 160px;
  height: auto;
  position: relative;
  bottom: 4px;
`;

export const ProfileMusic = styled.div`
  strong {
    font-size: 14px;
  }
  p {
    font-size: 12px;
    color: #767676;
  }
`;

export const PlayBtn = styled.button`
  border: 0;
  outline: none;
  background-color: inherit;

  img {
    width: 23px;
    height: 27px;
  }
`;

// export const NotPost = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 30px;
//   margin-top: 216px;
//   p {
//     color: #767676;
//     font-size: 14px;
//   }
// `;
