import React from 'react';
import { EmailJoinStyle } from '../nextButton/EmailJoinStyle';
import { useNavigate } from 'react-router-dom';

export default function EmailJoin() {
  const navigate = useNavigate();

  const onJoin = () => {
    navigate('/join');
  }

  return (
    <EmailJoinStyle onClick={onJoin}>이메일로 회원가입</EmailJoinStyle>
  );
}
