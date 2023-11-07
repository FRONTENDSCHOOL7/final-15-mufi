
import styled, { keyframes } from 'styled-components';
import iconLike from '../../assets/icon-heart.png';
import iconLikefill from '../../assets/icon-heart-fill.png';
import iconComment from '../../assets/icon-message-white.png';
import iconMore from '../../assets/icon-more-vertical-large.png';
import iconTagRemove from '../../assets/tag-remove.png';
import iconFestivalRemove from '../../assets/festival-remove.png';

// 게시글 리스트
export const PostList = styled.ul`
  width: 390px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
`;

// 게시물 하나
export const PostItem = styled.li`
  display: flex;
  gap: 13px;
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  transition: all 0.3s;
  margin: 0 auto;

  /* &.cardUI { */
  margin: 8px;
  margin-bottom: 4px;
  box-shadow: 0 0 16px #dedede;
  border-radius: 8px;
  &:hover {
    /* transform: scale(102%); */
  }
  /* } */
`;
export const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  background-color: #767676;
  object-fit: cover;
  border-radius: 40px;
`;

// 게시글 오른쪽
export const PostContent = styled.article`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* box-shadow: inset 0 0 32px red; */
`;
export const UpperWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: inset 0 0 32px red; */
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 4px 0 0 0;
`;
export const UserName = styled.p`
  color: #000;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const UserId = styled.p`
  color: #767676;
  font-size: 12px;
`;
export const BtnMore = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  background-image: url(${iconMore});
  background-size: 18px;
  background-repeat: no-repeat;
`;
export const PostContentImg = styled.img`
  width: 304px;
  aspect-ratio: 1.3 / 1;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #efefef;
  box-sizing: border-box;
`;
export const PostContentText = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 17px;
`;
// Btn
const blooming = keyframes`
  0% {
    opacity: 0;
    scale: 1;
    transform: translateY(0);
  } 50% {
    transform: translateY(-10px);
    scale: 1;
  } 100% {
    opacity: 1;
    scale: 1;
    transform: translateY(0);
  }
`;
const disappearing = keyframes`
  0% {
    transform: translateY(0);
  } 50% {
    transform: translateY(10px);
    scale: 1;
  }  100% {
    background: url(${iconLike});
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const BtnLike = styled.button`
  width: fit-content;
  border: none;
  background-color: transparent;
  position: relative;
  margin-left: 18px;
  color: #767676;
  font-size: 12px;
  transition: all 0.3s;
  &::before {
    content: '';
    width: 20px;
    height: 20px;
    position: absolute;
    background: url(${iconLike});
    top: -0.25em;
    left: -18px;
  }
  &.unliked::before {
    animation: ${disappearing} 0.7s forwards;
    background: url(${iconLikefill});
  }
  &.liked::before {
    animation: ${blooming} 0.7s forwards;
    background: url(${iconLikefill});
  }
`;

export const BtnComment = styled(BtnLike)`
  &::before {
    background: url(${iconComment});
  }
`;
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
export const TagItem = styled.li`
  list-style: none;
  font-size: 14px;
  color: #666;
  line-height: 17px;
  padding: 2px 4px;
  font-weight: 500;
  background-color: #ebebeb;
  width: fit-content;
  border-radius: 2px;
`;
export const FestivalItem = styled(TagItem)`
  background-color: #1f2241;
  color: white;
`;
export const PostTime = styled.p`
  font-size: 10px;
  color: #767676;
`;
export const RemoveBtn = styled.button`
  margin-left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: none;
  background-image: url(${iconTagRemove});
  background-position: center;
  background-color: #afafaf;
`;
export const FestivalRemoveBtn = styled(RemoveBtn)`
  background-image: url(${iconFestivalRemove});
  background-color: white;
`;
