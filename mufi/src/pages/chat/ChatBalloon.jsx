import React from 'react'
import * as C from './ChatStyle'

export default function ChatBalloon(
  {isMyBalloon = false,
  chat}
) {

  return (
    <>
      <C.ChatBallonWrapper className={ isMyBalloon ? 'my' : null}>
      <C.ChatSenderProfile className={ isMyBalloon ? 'my' : null}/>

      <C.ChatBalloonTextWrapper className={ isMyBalloon ? 'my' : null}>
     
        <C.ChatBalloon className={ isMyBalloon ? 'my' : null}>
          {chat}
        </C.ChatBalloon>
        <C.ChatBalloonSentTime className={ isMyBalloon ? 'my' : null}>
            12:25
        </C.ChatBalloonSentTime>

      </C.ChatBalloonTextWrapper>
    </C.ChatBallonWrapper>
    </>
  )
}
