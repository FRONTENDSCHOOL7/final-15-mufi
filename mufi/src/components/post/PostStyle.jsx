import styled from "styled-components";
import iconLike from "../../assets/icon-heart.png"
import iconLikefill from "../../assets/icon-heart-fill.png"
import iconComment from "../../assets/icon-message-white.png"
import userProfile from "../../assets/basic-profile-small.png"
import iconMore from '../../assets/icon-more-vertical-large.png';

// 게시글 리스트
export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: scroll;
`

// 게시물 하나
export const PostItem = styled.li`
  display: flex;
  gap: 13px;
  padding: 8px;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  transition: all 0.3s;

  &.cardUI {
      margin: 4px;
      box-shadow: 0 0 16px #dedede;
      border-radius: 8px;
      &:hover {
          transform: scale(102%);
      }
  }
`
export const UserProfile = styled.img`
  width: 40px;
  height: 40px;
  background-image: url(${userProfile});
  border-radius: 40px;
`

// 게시글 오른쪽
export const PostContent = styled.article`
  display: flex;
  width: 304px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  /* box-shadow: inset 0 0 32px red; */

`
export const UpperWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: inset 0 0 32px red; */
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding: 4px 0 0 0;
`
export const UserName = styled.p`
  color: #000;
  font-size: 14px;
`
export const UserId = styled.p`
  color: #767676;
  font-size: 12px;
`
export const BtnMore = styled.button`
  width: 18px;
  height: 18px;
  border: none;
  background-color: transparent;
  background-image: url(${iconMore});
  background-size: 18px;
  background-repeat: no-repeat;
`
export const PostContentImg = styled.img`
  max-width: 304px;
  aspect-ratio: 1.3 / 1;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #efefef;
  box-sizing: border-box;
`
export const PostContentText = styled.p`
  text-align: left;
  font-size: 14px;
  line-height: 17px;
`
// Btn
export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
`
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
    background: url(${iconLike});
    position: absolute;
    top: -0.25em;
    left: -18px;
  }
  &.liked::before{
    background: url(${iconLikefill});
  }
`

export const BtnComment = styled(BtnLike)`
  &::before {
    background: url(${iconComment});
  }
`
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`
export const TagItem = styled.li`
  list-style: none;
  font-size: 14px;
  color: #666;
  line-height: 17px;
  padding: 2px 4px;
  font-weight: 500;
  background-color: #EBEBEB;
  width: fit-content;
  border-radius: 2px;
`
export const FestivalItem = styled(TagItem)`
  background-color: #1F2241;
  color: white;
`
export const PostTime = styled.p`
  font-size: 10px;
  color: #767676;
`