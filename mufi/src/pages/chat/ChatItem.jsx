import React from 'react';
import * as C from './ChatStyle';
import { Link } from 'react-router-dom';

export default function ChatItem({ dataChat }) {
  
  const chatItems = dataChat.map((v) => {
    const sentContent = v.dataChatText[v.dataChatText.length-1];

    return (
      <Link to={`/chatroom/${v.senderName}`}>
        <C.ChatItem>
          <C.Content>
            <C.UserProfile src={v.senderImg} />
            <C.ChatContent>
              <C.SenderName>{v.senderName}</C.SenderName>
              <C.SentContent>{sentContent}</C.SentContent>
            </C.ChatContent>
          </C.Content>
          <C.SentTime>{v.date}</C.SentTime>
        </C.ChatItem>
      </Link>
    );
  });

  return <>{chatItems}</>;
}
