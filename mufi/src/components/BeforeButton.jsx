import React from 'react'
import {BeforeButtonStyle} from '../components/BeforeButtonStyle'

export default function BeforeButton() { {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };


  return (
    <BeforeButtonStyle>이전 페이지</BeforeButtonStyle>
  )
}