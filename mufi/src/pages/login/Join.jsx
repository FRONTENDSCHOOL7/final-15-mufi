import React, { useState, useEffect } from 'react';
import Header from '../../components/headers/GoBackHeader';
import Input from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import {
  Layout,
  Title,
  InputGroup,
  Label,
  ErrorMessage,
  NextBtn,
} from './JoinStyle';

// api 연동 import
import { emailValidAPI } from '../../api/user/emailValidAPI';

import { Helmet } from 'react-helmet-async';

const Join = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isBtnActive, setIsBtnActive] = useState(false);
  const navigate = useNavigate();

  // api 연동
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  // const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);

  // 버튼 활성화 여부 결정
  useEffect(() => {
    if (!emailError && !passwordError) {
      if (!!email && !!password) {
        setIsBtnActive(false);
      } else {
        setIsBtnActive(true);
      }
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
      setIsEmailValid(false);
    } else if (emailValue === '') {
      setEmailError('이메일을 입력해주세요.');
      setIsEmailValid(false);
    } else {
      setEmailError('');
      setIsEmailValid(true);
    }
  };

  // 이메일 중복 검사 api/user/emailValid.js
  const userEmailDuplicate = async (e) => {
    const userDuplicateEmail = e.target.value;
    setEmail(userDuplicateEmail);
    const emailValidMessage = await emailValidAPI(userDuplicateEmail);
    if (emailValidMessage?.message === '이미 가입된 이메일 주소 입니다.') {
      setEmailError('이미 가입된 이메일 주소입니다.');
      setIsEmailValid(false);
      // setIsEmailDuplicate(false);
    } else if (emailValidMessage?.message === '사용 가능한 이메일 입니다.') {
      setIsEmailValid(true);
      // setIsEmailDuplicate(true);
    }
  };

  // 비밀번호 유효성 검사
  const userPasswordValidation = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    const passwordReg = /^[A-Za-z0-9~!@#$%^&*]{8,16}$/;
    if (passwordValue.length < 6) {
      setPasswordError('비밀번호는 6자 이상이어야 합니다.');
      setIsPasswordValid(false);
    } else if (!passwordReg.test(passwordValue)) {
      setPasswordError(
        '비밀번호는 영어 대소문자, 숫자, 특수문자(~!@#$%^&*)만 사용해주세요.'
      );
      setIsPasswordValid(false);
    } else if (passwordValue === '') {
      setPasswordError('비밀번호를 입력해주세요.');
      setIsPasswordValid(false);
    } else {
      setPasswordError('');
      setIsPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>JOIN</title>
      </Helmet>
      <Layout>
        <Header />
        <Title>이메일로 회원가입</Title>
        <form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={userEmailValidation}
              placeholder="이메일 주소를 입력해주세요."
              onBlur={userEmailDuplicate}
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
              placeholder="비밀번호를 설정해 주세요"
              required
            />
          </InputGroup>

          <InputGroup>
            <ErrorMessage>{passwordError}</ErrorMessage>
          </InputGroup>

          <NextBtn
            disabled={isBtnActive}
            onClick={() => {
              navigate('/joinprofile', { state: { email, password } });
            }}
          >
            다음
          </NextBtn>
        </form>
      </Layout>
    </>
  );
};

export default Join;
