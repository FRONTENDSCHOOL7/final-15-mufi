import React from 'react';
import * as FL from './FollowerListStyle';
import Follower from '../../components/follwer/Follower';
import GoBackMoreHeader from '../../components/headers/GoBackMoreHeader';
import { Helmet } from 'react-helmet-async';

export default function FollowerList() {
  return (
    <>
      <Helmet>
        <title>FollowerList</title>
      </Helmet>
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
