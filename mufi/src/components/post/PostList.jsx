import React from 'react'
import PostItem from './PostItem'
import * as P from './PostStyle' 

export default function PostList({dataPost}) {
  return (
    <P.PostList>
        <PostItem dataPost={dataPost}/>
    </P.PostList>
  )
}
