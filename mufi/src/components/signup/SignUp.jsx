import React, { useState } from 'react';
import * as SU from './SignUp.styled';
import GoBackHeader from '../GoBackHeader';

export default function SignUp() {
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
    <SU.SignUpLayout>
      <GoBackHeader />
      <SU.Title>이메일로 회원가입</SU.Title>

      <SU.WrapInput>
        <SU.TextInput>
          <SU.Text>이메일</SU.Text>
          <SU.Input
            type="email"
            placeholder="이메일 주소를 입력해 주세요."
            required
          />
        </SU.TextInput>
        <SU.EmailWarning>*이미 가입된 이메일 주소입니다.</SU.EmailWarning>
      </SU.WrapInput>
      <SU.WrapInput>
        <SU.TextInput>
          <SU.Text>비밀번호</SU.Text>
          <SU.Input
            type="password"
            placeholder="비밀번호를 설정해 주세요."
            required
            value={password}
            onChange={handlePasswordChange}
          />
        </SU.TextInput>
        {passwordWarning && (
          <SU.PasswordWarning>{passwordWarning}</SU.PasswordWarning>
        )}
      </SU.WrapInput>
      <SU.NextButton>다음</SU.NextButton>
    </SU.SignUpLayout>
  );
}
