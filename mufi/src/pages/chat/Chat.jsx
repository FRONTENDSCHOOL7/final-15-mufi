import React from 'react'
import { Layout } from '../../components/Layout/LayoutStyle'
import NavBar from '../../components/navBar/NavBar'
import GoBackMoreHeader from '../../components/GoBackMoreHeader'
import ChatList from './ChatList'

export default function Chat() {

  const dataChat = [{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요? 맛있는 감귤 팝니다. 드셔보실라요? 맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  },{
    senderName: '감귤농장주',
    sentContent: '맛있는 감귤 팝니다. 드셔보실라요?'
  }
  ];

  return (
    <Layout>
        <GoBackMoreHeader/>
        <ChatList dataChat={dataChat}/>
        <NavBar/>
    </Layout>
  )
}
