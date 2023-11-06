import styled from 'styled-components';

export const ShowPostWrapper = styled.section`
  background-color: #fff;
  width: 100%;
  height: 42px;
  border: 0.5px solid var(--DBDBDB, #dbdbdb);

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-shrink: 0;
`;

export const ListWrapper = styled.div`
  button {
    border: none;
    background: none;
    outline: 0;
    /* height: 26px; */
    padding: 0;
    cursor: pointer;
  }
  img {
    width: 26px;
  }
`;
export const AlbumWrapper = styled.div`
  button {
    border: none;
    background: none;
    outline: 0;
    /* height: 26px; */
    padding: 0 16px;
    cursor: pointer;
  }
  img {
    width: 26px;
  }
`;
