 import React from 'react'
import MusicChangeBtnStyle from './MusicChangeBtnStyle'
import { useNavigate } from 'react-router-dom';

export default function MusicChangeBtn() {
  
const navigate = useNavigate();

  const onMusicAdd = () => {
    navigate('/MusicAdd');
  }

return (
    <MusicChangeBtnStyle  onClick={onMusicAdd}>프로필 뮤직 수정</MusicChangeBtnStyle>
  )
}
