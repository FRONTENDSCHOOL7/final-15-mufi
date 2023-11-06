import React from 'react';
import { BeforeButtonStyle } from '../components/BeforeButtonStyle';
import { useNavigate } from 'react-router-dom';

export default function BeforeButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <BeforeButtonStyle onClick={handleGoBack}>이전 페이지</BeforeButtonStyle>
  );
}
