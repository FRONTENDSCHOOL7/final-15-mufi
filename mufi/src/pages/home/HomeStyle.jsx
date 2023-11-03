import styled from 'styled-components';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';
import { Layout } from '../../components/Layout/LayoutStyle';

export const HLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const ContentEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 70px;
  margin-bottom: 10px;
`;

export const FollowBtnLarge = styled(NextBtnStyle)`
  width: 120px;
  height: 44px;
  font-size: 14px;
  color: #fff;
`;

export const Text = styled.p`
  color: #767676;
  font-size: 14px;
  line-height: 14px;
`;

export const TempHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: #fff;
`;

export const HomeFeed = styled.div``;
