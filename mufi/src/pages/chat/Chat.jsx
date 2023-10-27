import React from 'react';
import { Layout } from '../../components/Layout/LayoutStyle';
import NavBar from '../../components/navBar/NavBar';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';

export default function Chat() {
  return (
    <Layout>
      <GoBackMoreHeader />
      <div style={{ height: '100%' }}>Chat</div>
      <NavBar />
    </Layout>
  );
}
