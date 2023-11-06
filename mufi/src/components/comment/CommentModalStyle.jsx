import styled, { keyframes } from 'styled-components';

const moveUpwards = keyframes`
  0% {
    bottom: 0px;
  }
  100% {
    bottom: 60px;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 500px;
  height: 100vh;

  top: 0;
  left: 0;

  z-index: 5;
  width: 100%;
  background-color: #00000097;
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
  animation: ${moveUpwards} 0.3s forwards;
  width: 390px;
  position: fixed;
  bottom: 0;
  background: #ffffff;
  padding-bottom: 15px;
  border-radius: 10px 10px 0px 0px;
  z-index: 10;
`;

export const Li = styled.li`
  /* padding: 14px 26px; */
`;

export const Button = styled.button`
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  padding: 16px 26px;
  box-sizing: border-box;

  outline: none;
  background-color: transparent;
  border: none;

  text-align: left;
  &:hover {
    background-color: #e0e0e0;
  }
`;
