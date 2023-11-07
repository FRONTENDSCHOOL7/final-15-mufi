import styled from 'styled-components';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';

export const Layout = styled.div`
  position: relative;
  text-align: center;
  width: 390px;
  height: 100vh;
  background-color: #000;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
  margin: 0 auto 12px;
  margin-bottom: 40px;
`;

export const InputGroup = styled.div`
  width: 100%;
  max-width: 300px;
  text-align: left;
  margin-left: 34px;

  margin-bottom: 10px;
`;

export const Input = styled.div`
  margin-top: -10px;
  font-size: 12px;
  color: #eb5757;
  margin-left: 10px;
`;

export const Label = styled.label`
  margin-bottom: 15px;
  font-size: 12px;
  color: #767676;
  text-align: left;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  color: #eb5757;
  margin-bottom: 30px;
`;

export const NextBtn = styled(NextBtnStyle)`
  &:disabled {
    background-color: #1f2241;
    color: #606367;
    cursor: default;
  }
`;
