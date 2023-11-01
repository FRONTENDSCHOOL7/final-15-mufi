import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 47.5px;
  background-color: #000;
  border-bottom: 0.5px solid #dbdbdb;
  border-radius: 16px 16px 0px 0px;

  position: relative;
`;

export const BackBtn = styled.button`
  height: 22px;
  border: none;
  background-color: inherit;
  outline: none;
  padding: 13px 0px;

  position: absolute;
  left: 16px;

  display: flex;

  span {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    margin-left: 15px;
    transform: translateY(25%);
    cursor: default;
  }
`;

export const OkBtn = styled.button`
  width: 90px;
  height: 32px;
  background-color: #2033e7;
  color: #ffffff;

  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;

  position: absolute;
  right: 16px;
  margin: 8px 0px;
`;
