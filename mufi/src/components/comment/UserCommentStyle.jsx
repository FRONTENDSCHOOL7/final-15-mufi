import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 358px;
  display: flex;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 0px 16px;

  border-bottom: 1px solid #efefef;
`;

export const Container = styled.div`
  width: 310px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  /* box-sizing: border-box; */
`;

export const Content = styled.div``;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const UserName = styled.h2`
  font-size: 14px;
  padding-right: 6px;
`;

export const CommentTime = styled.p`
  font-size: 10px;
  color: #767676;
`;

export const MoreIcon = styled.button`
  outline: none;
  background: none;
  border: none;
  box-sizing: border-box;
  margin-left: auto;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const Comment = styled.p`
  color: #333;
  font-size: 14px;
`;
