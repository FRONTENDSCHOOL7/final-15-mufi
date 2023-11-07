import React, { useEffect, useState } from 'react';
import * as C from './ChatStyle';
import jukjae from '../../assets/jukjae.jpeg';

export default function ChatBalloon({ isMyBalloon = false, chat, imgSrc }) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  // 시간
  useEffect(() => {
    // console.log(chat)
    const date = new Date();
    setHour(date.getHours());
    setMinute(date.getMinutes());
    console.log(hour, minute);
  }, []);

  return (
    <>
      <C.ChatBallonWrapper className={isMyBalloon ? 'my' : null}>
        <C.ChatSenderProfile
          src={jukjae}
          className={isMyBalloon ? 'my' : null}
        />

        <C.ChatBalloonTextWrapper className={isMyBalloon ? 'my' : null}>
          {/* 이미지 플렉스 레이아웃 */}
          <C.SentContentWrapper>
            {imgSrc &&
              imgSrc.map((v) => <C.SentImg src={v} alt="전송된 이미지" />)}
          </C.SentContentWrapper>

          {/* 채팅 */}
          <C.SentChatWrapper>
            <C.ChatBalloon className={isMyBalloon ? 'my' : null}>
              {chat.trim() !== '' ? chat : '(사진)'}
            </C.ChatBalloon>
            <C.ChatBalloonSentTime className={isMyBalloon ? 'my' : null}>
              {hour.toString().padStart(2, '0')}:
              {minute.toString().padStart(2, '0')}
            </C.ChatBalloonSentTime>
          </C.SentChatWrapper>
        </C.ChatBalloonTextWrapper>
      </C.ChatBallonWrapper>
    </>
  );
}
