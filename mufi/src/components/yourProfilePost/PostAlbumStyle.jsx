import styled from 'styled-components';

export const PostAlbumWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 114px);
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
`;

export const AlbumImg = styled.img`
  width: 114px;
  height: 114px;
  object-fit: cover;
  object-position: center;
`;

export const DefaultImgWrapper = styled.div`
  width: 114px;
  height: 114px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DefaultImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
