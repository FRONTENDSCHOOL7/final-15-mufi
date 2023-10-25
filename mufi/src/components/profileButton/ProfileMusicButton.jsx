import React from 'react';
import * as PMB from './ProfileMusicButtonStyle';
import QuarterNote from '../../assets/quarter-note.png';
import PlayIcon from '../../assets/play.png';

export default function ProfileMusicButton({ musicContent }) {
  return (
    <>
      <PMB.Button>
        <img src={QuarterNote} alt="4분음표 아이콘" />
        {musicContent}
        <img src={PlayIcon} alt="재생 아이콘" />
      </PMB.Button>
    </>
  );
}
