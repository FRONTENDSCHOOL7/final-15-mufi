import styled from 'styled-components';
import searchIcon from '../../assets/icon-search.png';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;
  position: sticky;
  top: 0;
  z-index: 10;

  padding: 13px 22px 13px 22px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
`;

export const LogoHeader = styled.img`
  width: 88px;
  height: 22px;
`;
