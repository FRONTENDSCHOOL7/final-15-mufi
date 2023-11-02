import styled from 'styled-components';

export const FollowingWrapper = styled.li`
  display: flex;
  width: 342px;
  height: 48px;
  padding: 0px 8px 4px 8px;
  justify-content: space-between;
  align-items: center;

  margin: 4px auto;

  border-bottom: 1px solid #efefef;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const ContentWrapper = styled.div`
  overflow: hidden;
`;

export const UserName = styled.strong`
  display: block;
  margin-top: 4px;
  font-size: 14px;
  font-weight: bold;
`;

export const UserInfo = styled.p`
  margin-top: 2px;
  font-size: 12px;
  color: #767676;
`;
