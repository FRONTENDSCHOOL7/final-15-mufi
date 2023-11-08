import styled from 'styled-components';
import { Layout } from '../../components/Layout/LayoutStyle';
import { ModalContainer } from '../../components/moreModal/MoreModalStyle';

export const PDLayout = styled(Layout)`
  height: 100vh;
  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Div = styled.div`
  overflow-y: scroll;
  height: fit-content;
  padding-bottom: 60px;
`;

export const CommentWrapper = styled.div`
  /* height: calc(100vh - 560px); */
  /* overflow-y: scroll; */
`;
