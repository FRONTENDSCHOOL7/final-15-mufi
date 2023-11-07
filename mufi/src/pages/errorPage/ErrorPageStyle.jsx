import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 390px;
  height: 100vh;
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
`;

export const StyledDiv = styled.div`
  position: absolute;
  top: 388px;
  left: 114px;
  margin-top: 10px;
  margin-bottom: 20px;
  color: #767676;
`;
