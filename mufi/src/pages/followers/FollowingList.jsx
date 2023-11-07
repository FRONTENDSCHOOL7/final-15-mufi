import React from 'react';
import * as FL from './FollowingListStyle';
import Following from '../../components/follwer/Following';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import { Helmet } from 'react-helmet-async';

export default function FollowingList() {
  return (
    <>
      <Helmet>
        <title>FollowingList</title>
      </Helmet>
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
