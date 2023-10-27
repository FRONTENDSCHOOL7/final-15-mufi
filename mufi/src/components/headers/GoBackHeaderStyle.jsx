import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;

  margin-bottom: 46px;

  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderBtn = styled.button`
  border: none;
  background-color: inherit;
  outline: none;
  padding: 0;

  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
