import styled from 'styled-components';
import home from '../../assets/icon-home.png'
import homeFill from '../../assets/icon-home-fill.png'
import chat from '../../assets/icon-message-gray.png'
import chatfill from '../../assets/icon-message-fill.png'
import user from '../../assets/icon-user.png'
import userfill from '../../assets/icon-user-fill.png'
import post from '../../assets/icon-add-post.png'
import postfill from '../../assets/icon-edit-fill.png'

export const Container = styled.div`
  width: 390px;
  height: 60px;
  background-color: #000;
  position: absolute;
  bottom: 0;
`

export const IconList = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  justify-content: space-around;
  gap: 14px;
`
export const IconItem = styled.li`
  width:  84px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-position: 30px 12px;
`
export const Home = styled(IconItem)`
  background-image: url(${home});
`
export const HomeFill =styled(IconItem)`
  background-image: url(${homeFill});
`
export const Chat = styled(IconItem)`
  background-image: url(${chat});
`
export const ChatFill = styled(IconItem)`
  background-image: url(${chatfill});
`
export const Post = styled(IconItem)`
  background-image: url(${post});
`
export const PostFill = styled(IconItem)`
  background-image: url(${postfill});
`
export const User = styled(IconItem)`
  background-image: url(${user});
`
export const UserFill = styled(IconItem)`
  background-image: url(${userfill});
`

export const SeletedLabel =styled.p`
  color: white;
  font-size: 10px;
  line-height: 14px;
  padding-top: 39.5px;
`
export const UnselectedLabel = styled(SeletedLabel)`
  color: #DBDBDB;
`