import React, { useEffect } from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import NavBar from '../../components/navBar/NavBar';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import ChatList from './ChatList';
import { dataChat } from './chatData.js';
import MoreModal from '../../components/moreModal/MoreModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { postMoreState, lastVisitedPageState } from '../../Atoms/atoms';
import { Helmet } from 'react-helmet-async';

export default function Chat() {
  const isModalOpen = useRecoilValue(postMoreState);
  const setLastVisitedPage = useSetRecoilState(lastVisitedPageState);

  useEffect(() => {
    setLastVisitedPage('/chat');
  }, []);
  return (
    <>
      <Helmet>
        <title>CHAT</title>
      </Helmet>
      <Layout>
        <GoBackMoreHeader />
        <ChatList dataChat={dataChat} />
        {isModalOpen && <MoreModal />}

        <NavBar />
      </Layout>
    </>
  );
}
