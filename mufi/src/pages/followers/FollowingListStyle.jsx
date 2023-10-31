import styled from 'styled-components';

export const Layout = styled.div`
  position: relative;
  /* text-align: center; */
  width: 390px;
  height: 100vh;
  background-color: #fff;
  margin: auto;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none; // 스크롤 바 숨기기
  }

  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FollowerList = styled.div`
  padding: 4px auto;
`;
