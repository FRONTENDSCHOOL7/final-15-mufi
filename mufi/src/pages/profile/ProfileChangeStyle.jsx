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

export const H1 = styled.h1`
  font-size: 24px;
  color: #fff;

  margin: 0 auto 12px;
`;

export const P = styled.p`
  font-size: 14px;
  color: #767676;

  margin: 0 auto 30px;
`;

export const Img = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  z-index: 0;
  position: relative;
`;


export const ImgInputLabel = styled.label`
  width: 36px;
  height: 36px;
  z-index: 1;
  position: relative;
  top: -36px;
  left: 36px;
  cusor: pointer;
`;
