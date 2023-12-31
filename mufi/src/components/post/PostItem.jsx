import React from 'react';
import TagList from './TagList';
import * as P from './PostStyle';
import { Link } from 'react-router-dom';
import BtnWrapper from './BtnWrapper';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { postInfoState, postIdState, postMoreState } from '../../Atoms/atoms';
import img from '../../assets/basic-profile-small.png';
import imgError from '../../assets/imgError.png';

export default function PostItem({ dataPost }) {
  // console.log(dataPost);
  const setIsModalOpen = useSetRecoilState(postMoreState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [postInfo, setPostInfo] = useRecoilState(postInfoState);

  const postItems = dataPost.map((v, index) => {
    // 게시글 내용 데이터 처리
    const regExpTag = /(content:|\\|tag:|festival:)/g;
    let contents;
    let textContent;
    let tags;
    let festival = null;

    if (v.content) {
      contents = v.content.split(regExpTag);
      textContent = contents[2];
      if (contents[contents.length - 1]) {
        tags = contents[contents.length - 1].split(',');
      }
      if (contents[6]) {
        festival = contents[6].split(',');
      }
    }
    // console.log('-------',index,'--------')
    // console.log('textContent', textContent);
    // console.log('tags', tags);
    // console.log('festival', festival);

    // 게시글 날짜 표시
    const createdAt = new Date(v.createdAt);
    let year, month, date, hours, minutes;
    if (v && v.createdAt) {
      year = createdAt.getFullYear();
      month = createdAt.getMonth() + 1;
      date = createdAt.getDate();
      hours = createdAt.getHours();
      minutes = createdAt.getMinutes();
    }

    // 게시글 정보 내보내기
    const handleBtnMore = () => {
      setIsModalOpen(true);
      setPostId(v.id);
      setPostInfo(v);
    };

    // 유저 정보 내보내기
    const handleUser = () => {
      // v.author
      // console.log(v.author.accountname);
    };

    //
    const handleImgError = (e) => {
      e.target.src = img;
    };

    const handleContentImgError = (e) => {
      e.target.src = imgError;
    };

    return (
      <P.PostItem key={index}>
        <Link to={'/profile/' + v.author.accountname} onClick={handleUser}>
          <P.UserProfile src={v.author.image} onError={handleImgError} />
        </Link>

        <P.PostContent>
          <P.UpperWrapper>
            <Link to={'/profile/' + v.author.accountname} onClick={handleUser}>
              <P.UserInfo>
                <P.UserName>{v.author.username}</P.UserName>
                <P.UserId>@{v.author.accountname}</P.UserId>
              </P.UserInfo>
            </Link>

            <P.BtnMore onClick={handleBtnMore} />
          </P.UpperWrapper>

          <Link to={`/postdetail/${v.id}`}>
            {v.image && <P.PostContentImg src={v.image} onError={handleContentImgError}/>}

            <P.PostContentText>{textContent}</P.PostContentText>
          </Link>

          <BtnWrapper
            heartCount={v.heartCount}
            commentNum={v.commentCount}
            postId={v.id}
            isHearted={v.hearted}
          />

          {(festival || tags) && (
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
              {festival && <TagList tags={festival} isFestival={true} />}
              {tags && <TagList tags={tags} />}
            </div>
          )}

          <P.PostTime>
            {year}년 {month}월 {date}일 {hours}:{minutes}
          </P.PostTime>
        </P.PostContent>
      </P.PostItem>
    );
  });

  return <>{postItems}</>;
}
