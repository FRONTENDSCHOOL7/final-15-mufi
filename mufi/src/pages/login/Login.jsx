import React, { useState } from 'react';
import Header from '../../components/GoBackHeader';
import Input from '../../components/Input';
import {
  Layout,
  Title,
  InputGroup,
  Label,
  LoginButton,
  ErrorMessage,
  EmailJoin,
} from './LoginStyle';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);

    if (username === '' || password === '') {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  return (
    <Layout>
      <Header/>
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
        <LoginButton type="submit">다음</LoginButton>
        <InputGroup>
          <EmailJoin>이메일로 회원가입</EmailJoin>
        </InputGroup>
      </form>
    </Layout>
  );
};

export default Login;
