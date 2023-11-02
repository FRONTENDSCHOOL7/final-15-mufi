import React from 'react'
import SaveButtonStyle from './SaveButtonStyle'
import {useNavigate} from 'react-router-dom';


export default function SaveButton() {
const navigate = useNavigate();

  const onJoin = () => {
    navigate('/ProfileChange');
  }
  return (
    <SaveButtonStyle onClick={onJoin}>저장</SaveButtonStyle>
    
  )
}
