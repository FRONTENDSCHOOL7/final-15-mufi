import styled from 'styled-components';
import NextBtnStyle from '../../components/nextButton/NextButtonStyle';
import { Layout } from '../../components/Layout/LayoutStyle';

export const HLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentEmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 100%;
  justify-content: center;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 70px;
  margin-bottom: 10px;
`;

export const FollowBtnLarge = styled(NextBtnStyle)`
  width: fit-content;
  padding: 0 32px;
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

export const HomeFeed = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const HomeSearch = styled.div`
  overflow: scroll;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
