import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 390px;
  /* width: 100%; */
  height: 61px;
  border-top: 0.5px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  border-radius: 0 0 16px 16px;
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 14px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  &::placeholder {
    color: #c4c4c4;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const PostBtn = styled.button`
  &:disabled {
    color: #c4c4c4;
    cursor: default;
  }
  color: #0019ff;
  width: 50px;
  font-size: 14px;
  background: none;
  outline: none;
  border: none;
`;
