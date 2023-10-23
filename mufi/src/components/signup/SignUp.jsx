import React from 'react';
import * as SU from './SignUp.styled';
import GoBackHeader from '../GoBackHeader';

const pwValidation = (e) => {
  const pwValue = e.target.value;
};

export default function SignUp() {
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
            onChange={{}}
            required
          />
        </SU.TextInput>
        <SU.PasswordWarning>
          *비밀번호는 6자 이상이어야 합니다.
        </SU.PasswordWarning>
      </SU.WrapInput>
      <SU.NextButton>다음</SU.NextButton>
    </SU.SignUpLayout>
  );
}
