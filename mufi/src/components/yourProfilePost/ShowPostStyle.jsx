import styled from 'styled-components';

export const ShowPostWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 42px;
  align-items: center;
  flex-shrink: 0;
  border: 0.5px solid #dbdbdb;
  background-color: white;
`;

export const ListWrapper = styled.div`
  position: absolute;
  right: 58px;
`;

export const AlbumWrapper = styled.div`
  position: absolute;
  right: 16px;
`;

export const PostContainer = styled.div`
  background-color: #fff;
  overflow-y: auto; // 컨텐츠가 y축을 벗어나면 스크롤바를 표시
  height: 100vh; // 높이를 적절하게 설정. 필요에 따라 조정 가능
  &::-webkit-scrollbar {
    display: none; // 스크롤 바 숨기기
  }
`;
