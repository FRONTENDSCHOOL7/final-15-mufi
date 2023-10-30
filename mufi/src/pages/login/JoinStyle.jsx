import styled from 'styled-components';

export const JoinLayout = styled.form`
  display: flex;
  flex-direction: column;

  position: relative;
  width: 390px;
  height: 100vh;
  background-color: #000;
  margin: auto;
  overflow: hidden;
  border-radius: 16px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 40px;
  color: #fff;

  margin: 0;
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 34px 16px 34px;
`;

export const TextInput = styled.div`
  border-bottom: 1px solid #dbdbdb;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #767676;

  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 32px;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  color: #fff;
  border: none;
  outline: none;
  background-color: #000;

  &::placeholder {
    color: #dbdbdb;
  }

  padding: 0;
`;

export const EmailWarning = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  color: #eb5757;
  margin: 6px 0px 0px 0px;
`;

export const PasswordWarning = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  color: #eb5757;
  margin: 6px 0px 0px 0px;
`;
