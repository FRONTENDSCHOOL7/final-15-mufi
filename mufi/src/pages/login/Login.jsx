import React, { useState, useCallback, useEffect } from 'react';
import Header from '../../components/headers/GoBackHeader';
import Input from '../../components/Input';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';
import EmailJoin from '../../components/nextButton/EmailJoin';
import { useNavigate } from 'react-router-dom';
import { Layout, Title, InputGroup, Label, ErrorMessage } from './LoginStyle';

import { useSetRecoilState } from 'recoil';
import { accountnameState, userLoginState } from '../../Atoms/atoms';
import { userTokenState } from '../../Atoms/atoms';
import { loginAPI } from '../../api/loginAPI'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const setUserToken = useSetRecoilState(userTokenState);
  const navigate = useNavigate();
  const [isBtnActive, setIsBtnActive] = useState(true);
  const setIsLogin = useSetRecoilState(userLoginState);
  const setAccountname = useSetRecoilState(accountnameState);

  // 버튼 활성화 여부 결정
  useEffect(() => {
    if (
      emailError === '' &&
      passwordError === '' &&
      email !== '' &&
      password !== ''
    ) {
      setIsBtnActive(false);
    } else {
      setIsBtnActive(true);
    }
  }, [email, password, emailError, passwordError]);

  // 이메일 유효성 검사
  const userEmailValidation = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailReg.test(emailValue)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    } else if (emailValue === '') {
      setEmail('이메일을 입력해주세요.');
    } else {
      setEmailError('');
    }
  };

  // 비밀번호 유효성 검사
  const userPasswordValidation = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    if (passwordValue.length < 6) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
    } else if (passwordValue === '') {
      setPasswordError('비밀번호를 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    let user = await loginAPI(email, password);
    let userToken = user.token;
    let userAccountname = user.accountname;
    if(userToken){
      setUserToken(userToken);
      setIsLogin(true);
      setAccountname(userAccountname);
      navigate('/home');
    }
  };

  return (
    <Layout>
      <Header />
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="text"
            value={email}
            onChange={userEmailValidation}
            required
          />
        </InputGroup>
        <InputGroup>
          <ErrorMessage>{emailError}</ErrorMessage>
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={userPasswordValidation}
            required
          />
        </InputGroup>

        <InputGroup>
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputGroup>

        <NextBtnStyle disabled={isBtnActive}>로그인</NextBtnStyle>
        <EmailJoin />
      </form>
    </Layout>
  );
};

export default Login;
