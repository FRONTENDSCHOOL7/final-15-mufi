import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;

  margin-bottom: 46px;

  position: relative;
`;

export const HeaderBtn = styled.button`
  border: none;
  background-color: inherit;
  outline: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 16px;
`;
