import React from 'react';
import * as C from './ChatStyle';
import { Link } from 'react-router-dom';

export default function ChatItem({ dataChat }) {
  const chatItems = dataChat.map((v) => {
    return (
      <Link to="/chatroom">
        <C.ChatItem>
          <C.Content>
            <C.UserProfile src={v.senderImg} />
            <C.ChatContent>
              <C.SenderName>{v.senderName}</C.SenderName>
              <C.SentContent>{v.sentContent}</C.SentContent>
            </C.ChatContent>
          </C.Content>
          <C.SentTime>{v.date}</C.SentTime>
        </C.ChatItem>
      </Link>
    );
  });

  return <>{chatItems}</>;
}
