import React from 'react';
import * as C from './ChatStyle';
import ChatItem from './ChatItem';
import MoreModal from '../../components/moreModal/MoreModal';
import { useRecoilValue } from 'recoil';
import { postMoreState } from '../../Atoms/atoms';

export default function ChatList({ dataChat }) {
  const isModalOpen = useRecoilValue(postMoreState);
  return (
    <>
        <C.ChatList>
            <ChatItem dataChat={ dataChat }/>
            {isModalOpen && <MoreModal />}
        </C.ChatList>
    </>
  )
}
