import React from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import NavBar from '../../components/navBar/NavBar';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import ChatList from './ChatList';
import { dataChat } from './chatData.js'
import MoreModal from '../../components/moreModal/MoreModal';
import { useRecoilValue } from 'recoil';
import { postMoreState } from '../../Atoms/atoms';

export default function Chat() {
  const isModalOpen = useRecoilValue(postMoreState);

  return (
    <Layout>
      <GoBackMoreHeader />
      <ChatList dataChat={dataChat} />
      {isModalOpen && <MoreModal />}

      <NavBar />
    </Layout>
  );
}
