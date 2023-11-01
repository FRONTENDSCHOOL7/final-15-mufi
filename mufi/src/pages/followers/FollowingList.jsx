import React from 'react';
import * as FL from './FollowingListStyle';
import Following from '../../components/follwer/Following';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';

export default function FollowingList() {
  return (
    <>
      <FL.Layout>
        <GoBackMoreHeader content="Followings" />
        <FL.FollowingList>
          <ul>
            <Following />
          </ul>
        </FL.FollowingList>
      </FL.Layout>
    </>
  );
}
