import React from 'react'
import * as NB from "./NavBarStyle"
import { useParams } from 'react-router-dom';

export default function NavBar() {
  const params = useParams();
  console.log(params.productId)
  return (
    <>
      <NB.Container>
        <NB.IconList>

          <NB.HomeFill>
            <NB.SeletedLabel>홈</NB.SeletedLabel>
          </NB.HomeFill>

          <NB.Chat>
            <NB.UnselectedLabel>채팅</NB.UnselectedLabel>
          </NB.Chat>

          <NB.Post>
            <NB.UnselectedLabel>게시물 작성</NB.UnselectedLabel>
          </NB.Post>

          <NB.User>
            <NB.UnselectedLabel>프로필</NB.UnselectedLabel>
          </NB.User>

        </NB.IconList>
      </NB.Container>
    </>
  )
}
