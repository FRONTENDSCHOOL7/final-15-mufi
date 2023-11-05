import styled from 'styled-components';
import BackIcon from '../../assets/icon-arrow-left.png';
import searchIcon from '../../assets/icon-search.png'


export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;
  position: sticky;
  top:0;
  z-index: 10;

  padding:  0 20px 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const HeaderBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-image: url(${BackIcon});
`;


export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 316px;
  background-color: #fff;
  padding: 4px 12px 4px 16px;
  border-radius: 32px;
  &:focus-within{
    outline: auto;
  }
`

export const HeaderSearchInput = styled.input`
  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
  }
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
`

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  background-image: url(${searchIcon});
`;
