import React from 'react'
import * as P from './PostStyle'

export default function PostItem({dataPost}) {
  const postItems = dataPost.map(v=>{
    
    const tags = v.tags.map(vv=>{
      return (
        <P.TagItem>#{vv}</P.TagItem>
        )
    })

    return (
      <P.PostItem>
        <P.UserProfile/>
        <P.PostContent>
          <P.UserInfo>
            위니브{v.title}
            <P.UserText>@weniv{v.content}</P.UserText>
          </P.UserInfo>
          <P.PostContentImg 
            src={v.postImgContent} />
          <P.PostContentText>
            {v.postTextContent}
          </P.PostContentText>
          
          <P.BtnWrapper>
            <P.BtnLike>{v.like}</P.BtnLike>
            <P.BtnComment>{v.commentNum}</P.BtnComment>
          </P.BtnWrapper>

          <P.TagList>
            {tags}
          </P.TagList>

        </P.PostContent>
      </P.PostItem>
    )
  })

  return (
    <>
      {postItems}
    </>
  )
}
