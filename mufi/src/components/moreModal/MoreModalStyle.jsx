import styled, { keyframes } from "styled-components";

const moveUpwards = keyframes`
  0% {
    bottom: -60px;
  }
  100% {
    bottom: 0px;
  }
`
export const Dim = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #00000097;
  position: absolute;
  top: 0;
  left: 0;
`
export const ModalContainer = styled.div`
  position: sticky;
  bottom: 0px;

  background-color: #fff;
  width: 100%;
  padding: 36px 0 10px;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 0 8px #00000025;
  animation: ${moveUpwards} 0.3s forwards;
  &::before {
    content: '';
    position: absolute;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);

    width: 50px;
    height: 4px;
    background-color: #dbdbdb;
    border-radius: 4px;
  }
`

export const ModalBtn = styled.button`
  width: 100%;
  font-size: 14px;
  line-height: 14px;
  padding: 16px 26px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  text-align: left;
  &:hover {
    background-color: #e0e0e0;
  }
`