import React from 'react'
import TagList from './TagList'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'
import BtnWrapper from './BtnWrapper'
import { useSetRecoilState } from 'recoil'
import { postMoreState } from '../../Atoms/atoms'

export default function PostItem({dataPost}) {
  const setIsModalOpen = useSetRecoilState(postMoreState);

  const handleBtnMore = () => {
    setIsModalOpen(true);
  }

  const regExpTag = /(content:|\\|tag:)/g

  const postItems = dataPost.map(v=>{
    // 게시글 내용 데이터 처리
    const contents = v.content.split(regExpTag);
    const textContent = contents[2];
    const tags = contents[contents.length-1].split(',');
    return (
      <P.PostItem>
        <Link to='/yourprofile'>
          <P.UserProfile/>
        </Link>
        
        <P.PostContent>
          <P.UpperWrapper>
            <Link to='/yourprofile'>
              <P.UserInfo>
                <P.UserName>{v.author.username}</P.UserName>
                <P.UserId>@{v.author.accountname}</P.UserId>
              </P.UserInfo>
            </Link>
            
            <P.BtnMore onClick={handleBtnMore}/>
          </P.UpperWrapper>

          <Link>
            {v.image && <P.PostContentImg src={v.image} />}
            <P.PostContentText>
              {textContent}
            </P.PostContentText>
          </Link>
          
          <BtnWrapper like={v.heartCount} commentNum={v.commentCount}/>
          
          {tags && <TagList tags={tags} />}

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
