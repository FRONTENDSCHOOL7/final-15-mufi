import React from 'react';
import * as FL from './FollowerListStyle';
import Follower from '../../components/follwer/Follower';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';

export default function FollowerList() {
  return (
    <>
      <FL.Layout>
        <GoBackMoreHeader content="Followers" />
        <FL.FollowerList>
          <ul>
            <Follower />
          </ul>
        </FL.FollowerList>
      </FL.Layout>
    </>
  );
}
