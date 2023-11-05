import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.3);
  font-family: 'SUITE-Regular';
`;

export const Line = styled.div`
  min-width: 50px;
  width: 15%;
  height: 4px;
  margin: 0 auto;
  background: #dbdbdb;
  border-radius: 5px;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Ul = styled.ul`
  width: 390px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  padding-bottom: 15px;
  border-radius: 10px 10px 0px 0px;
  z-index: 10;
`;

export const Li = styled.li`
  padding: 14px 26px;
`;

export const Button = styled.button`
  font-family: inherit;
  outline: none;
  background: none;
  border: none;
`;
