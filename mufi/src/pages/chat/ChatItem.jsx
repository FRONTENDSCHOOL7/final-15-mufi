import React from 'react'
import * as C from './ChatStyle'
import { Link } from 'react-router-dom'

export default function ChatItem({ dataChat }) {

  const chatItems = dataChat.map(v=>{
    return (
      <Link to='/chatroom'>
        <C.ChatItem>
          <C.Content>
              <C.UserProfile/>
              <C.ChatContent>
                  <C.SenderName>{v.senderName}</C.SenderName>
                  <C.SentContent>{v.sentContent}</C.SentContent>
              </C.ChatContent>
          </C.Content>
          <C.SentTime>
              2023.10.25
          </C.SentTime>
        </C.ChatItem>
      </Link>
    )
  })

  return (
    <>
        { chatItems }
    </>
  )
}
