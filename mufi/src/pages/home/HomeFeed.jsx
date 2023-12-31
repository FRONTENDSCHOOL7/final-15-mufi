import React from 'react'
import PostList from '../../components/post/PostList'
import * as H from './HomeStyle'

export default function HomeFeed({postData}) {
  return (
    <H.HomeFeed>
      <PostList dataPost={postData}/>
    </H.HomeFeed>
  )
}
