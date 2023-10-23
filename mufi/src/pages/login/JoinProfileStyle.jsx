import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 390px;
  min-height: 884px;
  background: #000;
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

// input이 하나밖에 안들어가서 직접 style 줌
// export const ImgInput = styled.input`
//   display: none;
// `;

export const ImgInputLabel = styled.label`
  width: 36px;
  height: 36px;
  z-index: 1;
  position: relative;
  top: -36px;
  left: 36px;
`;
