import React from 'react'
import TagList from './TagList'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'
import BtnWrapper from './BtnWrapper'
import { useSetRecoilState } from 'recoil'
import { postMoreState } from '../../Atoms/atoms'
import TagItem from './TagItem'

export default function PostItem({dataPost}) {
  const setIsModalOpen = useSetRecoilState(postMoreState);

  const handleBtnMore = () => {
    setIsModalOpen(true);
  }

  const postItems = dataPost.map(v=>{
    // 게시글 내용 데이터 처리
    const regExpTag = /(content:|\\|tag:|festival:)/g
    const contents = v.content.split(regExpTag);
    
    const textContent = contents[2];
    
    let tags;
    if(contents[contents.length-1]){
      tags = contents[contents.length-1].split(',');
    }
    
    let festival = null;
    if(contents[6]){
      festival = contents[6].split(',');
      console.log(festival);
    }

    // 게시글 날짜 표시
    const createdAt = new Date(v.createdAt);
    let year, month, date, hours, minutes;
    if (v && v.createdAt) {
      year = createdAt.getFullYear()
      month = createdAt.getMonth() + 1;
      date = createdAt.getDate();
      hours = createdAt.getHours();
      minutes = createdAt.getMinutes();
    }

    return (
      <P.PostItem>
        <Link to='/yourprofile'>
          <P.UserProfile src={v.author.image}/>
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

          <div style={{display:'flex', flexDirection:'column', gap:'4px'}}>
            {festival && <TagList tags={festival} isFestival={true}/>}
            {tags && <TagList tags={tags} />}
          </div>

          <P.PostTime>{year}년 {month}월 {date}일 {hours}:{minutes}</P.PostTime>

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
