import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;

  margin-bottom: 5px;

  position: relative;
`;

export const HeaderBtn = styled.button`
  border: none;
  background-color: inherit;
  outline: none;

  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;

export const Pagename = styled.div`
border: none;
  background-color: inherit;
  outline: none;
  
position: absolute;
  top: 50%;
  left: 100px;
  transform: translate(-50%, -50%);

  color: #fff; 
`;




