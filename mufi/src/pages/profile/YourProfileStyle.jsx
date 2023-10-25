import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 390px;
  height: 844px;
  /* background-color: #fff; */
  margin: auto;
  overflow: hidden;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f2f2f2;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  min-height: 325px;
  background-color: #fff;

  margin-bottom: 6px;
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

export const BasicImg = styled.img``;

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
    font-size: 16px;
    font-weight: 700;
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

export const PostWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const PostType = styled.div`
  width: 100%;
  height: 42px;
  border: 0.5px solid var(--DBDBDB, #dbdbdb);
  background: #fff;
`;
