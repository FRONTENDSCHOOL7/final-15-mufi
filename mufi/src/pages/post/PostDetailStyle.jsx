import styled from 'styled-components';
import { Layout } from '../../components/Layout/LayoutStyle';

export const PDLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  /* overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Div = styled.div``;

export const CommentWrapper = styled.div`
  overflow: scroll;
`;
