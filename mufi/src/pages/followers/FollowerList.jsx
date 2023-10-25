import React from 'react';
import * as FL from './FollowerListStyle';
import Follower from '../../components/follwer/Follower';
import GoBackMoreHeader from '../../components/GoBackMoreHeader';

export default function FollowerList() {
  return (
    <>
      <FL.Layout>
        <GoBackMoreHeader />
        <FL.FollowerList>
          <ul>
            <Follower
              username="감귤의 품격-애월읍"
              userinfo="제주 노지귤, 하우스 한라봉 판매합니다!"
            />
            <Follower username="한라봉의 신" userinfo="나 감귤 좋아하네?" />
          </ul>
        </FL.FollowerList>
      </FL.Layout>
    </>
  );
}
