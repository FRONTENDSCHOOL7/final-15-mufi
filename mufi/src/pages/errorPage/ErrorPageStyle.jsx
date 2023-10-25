import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
`;

export const StyledImg = styled.img`
  position: absolute;
  top: 325px;
  left: 124px;
  width: 152px;
  height: 43px;
    /* 이미지 아래에 여백 추가 (원하는 수치로 조절 가능) */
`;


export const StyledDiv = styled.div`
position: absolute;
  top: 388px;
  left: 114px;
margin-top: 10px;
color: #767676;
`

export const beforeButton = styled.button`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  background-color: #2033E7;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;




