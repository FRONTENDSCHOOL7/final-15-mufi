import styled from 'styled-components';
import home from '../../assets/icon-home.png'
import homeFill from '../../assets/icon-home-fill.png'
import chat from '../../assets/icon-message-gray.png'
import chatfill from '../../assets/icon-message-fill.png'
import user from '../../assets/icon-user.png'
import userfill from '../../assets/icon-user-fill.png'
import uplodad from '../../assets/icon-add-post.png'
import uplodadfill from '../../assets/icon-edit-fill.png'

export const Container = styled.div`
  width: 390px;
  height: 60px;
  background-color: #000;
  position: sticky;
  bottom: 0;
  z-index: 10;
`

export const IconList = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  justify-content: space-around;
  gap: 14px;
`
export const IconItem = styled.button`
  width:  84px;
  height: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-position: 30px 12px;
  border: none;
  background-color: transparent;
`
export const Home = styled(IconItem)`
  background-image: url(${home});
  &.selected {
    background-image: url(${homeFill});
  }
`
export const Chat = styled(IconItem)`
  background-image: url(${chat});
  &.selected {
    background-image: url(${chatfill});
  }
`
export const Upload = styled(IconItem)`
  background-image: url(${uplodad});
  &.selected {
    background-image: url(${uplodadfill});
  }
`
export const Profile = styled(IconItem)`
  background-image: url(${user});
  &.selected {
    background-image: url(${userfill});
  }
`

export const Label =styled.p`
  color: #DBDBDB;
  font-size: 10px;
  line-height: 14px;
  padding-top: 39.5px;
  &.selected {
    color: white;
  }
`