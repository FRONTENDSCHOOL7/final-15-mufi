import React from 'react'
import TagList from './TagList'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'
import BtnWrapper from './BtnWrapper'

export default function PostItem({dataPost}) {
  
  const postItems = dataPost.map(v=>{

    return (
      <P.PostItem>
        <Link to='/yourprofile'>
          <P.UserProfile/>
        </Link>
        
        <P.PostContent>
          <Link to='/yourprofile'>
            <P.UserInfo>
              <P.UserName>{v.title}</P.UserName>
              <P.UserId>@weniv{v.content}</P.UserId>
            </P.UserInfo>
          </Link>

          <Link>
            {v.postImgContent && <P.PostContentImg src={v.postImgContent} />}
            <P.PostContentText>
              {v.postTextContent}
            </P.PostContentText>
          </Link>
          
          <BtnWrapper like={v.like} commentNum={v.commentNum}/>
          
          {v.tags && <TagList tags={v.tags} />}

          <P.PostTime>{v.postTime}</P.PostTime>

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
