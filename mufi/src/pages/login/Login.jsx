import React, { useState } from 'react';
import Header from '../../components/headers/GoBackHeader';
import Input from '../../components/Input';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';
import EmailJoin from '../../components/nextButton/EmailJoin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Layout,
  Title,
  InputGroup,
  Label,
  ErrorMessage,
} from './LoginStyle';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(true);
  const navigate = useNavigate();

  // 로그인 api
  /* const loginAPITest  = () => {
    const option = {
      url: "https://api.mandarin.weniv.co.kr/user/login",
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      data: {
        user: {
        email: username,
        password: password,
        },
      },
    };
  
    axios(option)
      .then((res) => {
        if(res.data.status === 422){
          console.log('아이디,비밀번호를 확인해주세요!')
          return;
        }
        console.log(res.data.user.username + "님 안녕하세요");
        navigate('/home');
      })
      .catch((err) => console.error(err));
  
    return (
      <>
        <h1>
          Users
        </h1>
      </>
    )
  }
  */
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username === '' || password === '') {
      setShowError(true);
    } else {
      setShowError(false);
    }
    // loginAPITest();
  };

  return (
    <Layout>
      <Header />
      <Title>로그인</Title>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="username">이메일</Label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="password">비밀번호</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </InputGroup>
        {showError && (
          <InputGroup>
            <ErrorMessage>
              *이메일 또는 비밀번호가 일치하지 않습니다.
            </ErrorMessage>
          </InputGroup>
        )}
        <NextBtnStyle>로그인</NextBtnStyle>
        <EmailJoin />
      </form>
    </Layout>
  );
};

export default Login;
