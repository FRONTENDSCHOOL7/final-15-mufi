import React, { useState } from 'react';
import * as J from './JoinStyle';
import GoBackHeader from '../../components/GoBackHeader';
import NextButton from '../../components/nextButton/NextButton';

export default function Join() {
  const [password, setPassword] = useState('');
  const [passwordWarning, setPasswordWarning] = useState('');

  // 비밀번호 유효성 검사
  const validatePassword = (password) => {
    if (password.length < 8 || password.length > 16) {
      return '8~16자리의 비밀번호를 입력해주세요.';
    }

    if (!/^[A-Za-z0-9~!@#$%^&*]{8,16}$/.test(password)) {
      return '비밀번호는 영어 대소문자, 숫자, 특수문자(~!@#$%^&*)만 사용해주세요.';
    }

    return '';
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordWarning(validatePassword(e.target.value));
  };

  return (
    <J.JoinLayout>
      <GoBackHeader />
      <J.Title>이메일로 회원가입</J.Title>

      <J.WrapInput>
        <J.TextInput>
          <J.Text>이메일</J.Text>
          <J.Input
            type="email"
            placeholder="이메일 주소를 입력해 주세요."
            required
          />
        </J.TextInput>
        <J.EmailWarning>*이미 가입된 이메일 주소입니다.</J.EmailWarning>
      </J.WrapInput>
      <J.WrapInput>
        <J.TextInput>
          <J.Text>비밀번호</J.Text>
          <J.Input
            type="password"
            placeholder="비밀번호를 설정해 주세요."
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </J.TextInput>
        {passwordWarning && (
          <J.PasswordWarning>{passwordWarning}</J.PasswordWarning>
        )}
      </J.WrapInput>
      <NextButton></NextButton>
    </J.JoinLayout>
  );
}
