import styled from "styled-components";
import iconLike from "../../assets/icon-heart.png"
import iconComment from "../../assets/icon-message-white.png"
import userProfile from "../../assets/basic-profile-small.png"

// 게시글 리스트
export const PostList = styled.ul`
    display: flex;
    flex-direction: column;
`

// 게시물 하나
export const PostItem = styled.li`
    display: flex;
    gap: 13px;
    padding: 8px;
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
    max-width: 304px;
    flex-direction: column;
    gap: 16px;
`
export const UserInfo = styled.div`
    height: 40px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px 0 0 0;
`
export const UserText = styled.p`
    color: #767676;
    font-size: 12px;
`
export const PostContentImg = styled.img`
    aspect-ratio: 1.3 / 1;
    object-fit: cover;
    border-radius: 10px;
`
export const PostContentText = styled.p`
    font-size: 14px;
    line-height: 17px;
`
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
    &::before {
        content: '';
        width: 20px;
        height: 20px;
        background: url(${iconLike});
        position: absolute;
        top: -0.25em;
        left: -18px;
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