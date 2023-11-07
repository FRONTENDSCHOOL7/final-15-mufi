import React from 'react';
import * as C from './ChatStyle';
import ChatItem from './ChatItem';

export default function ChatList({ dataChat }) {
  return (
    <>
        <C.ChatList>
            <ChatItem dataChat={ dataChat }/>
        </C.ChatList>
    </>
  )
}
