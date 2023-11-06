import React from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import NavBar from '../../components/navBar/NavBar';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import ChatList from './ChatList';
import { dataChat } from './chatData.js'

export default function Chat() {

  return (
    <Layout>
      <GoBackMoreHeader />
      <ChatList dataChat={dataChat} />
      <NavBar />
    </Layout>
  );
}
