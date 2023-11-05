import styled from 'styled-components';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  text-align: center;
  width: 390px;
  height: 100vh;
  background-color: #000;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
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

export const InputImageWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  z-index: 0;
  position: relative;
  object-fit: cover;
`;

export const ImgInputLabel = styled.label`
  width: 36px;
  height: 36px;
  z-index: 1;
  position: relative;
  top: -36px;
  left: 36px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  font-size: 12px;
  color: #eb5757;
  margin-top: 7px;
  padding-left: 2px;
`;

export const NextBtn = styled(NextBtnStyle)`
  &:disabled {
    background-color: #1f2241;
    color: #606367;
    cursor: default;
  }
`;
