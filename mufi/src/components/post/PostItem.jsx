import React from 'react'
import TagList from './TagList'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'
import BtnWrapper from './BtnWrapper'

export default function PostItem({dataPost}) {
  console.log('postItem안에서 출력중!',dataPost)
  const postItems = dataPost.map(v=>{

    return (
      <P.PostItem>
        <Link to='/yourprofile'>
          <P.UserProfile/>
        </Link>
        
        <P.PostContent>
          <Link to='/yourprofile'>
            <P.UserInfo>
              <P.UserName>{v.author.username}</P.UserName>
              <P.UserId>@{v.author.accountname}</P.UserId>
            </P.UserInfo>
          </Link>

          <Link>
            {v.image && <P.PostContentImg src={"https://api.mandarin.weniv.co.kr/"+v.image} />}
            <P.PostContentText>
              {v.content}
            </P.PostContentText>
          </Link>
          
          <BtnWrapper like={v.heartCount} commentNum={v.commentCount}/>
          
          {v.tags && <TagList tags={v.tags} />}

          <P.PostTime>{v.createdAt.slice(0,-14)}</P.PostTime>

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
