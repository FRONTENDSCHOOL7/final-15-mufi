import React from 'react'
import PostList from '../../components/post/PostList'
import * as H from './HomeStyle'

export default function HomeFeed({dataPost}) {
  return (
    <H.HomeFeed>
      <PostList dataPost={dataPost}/>
    </H.HomeFeed>
  )
}
