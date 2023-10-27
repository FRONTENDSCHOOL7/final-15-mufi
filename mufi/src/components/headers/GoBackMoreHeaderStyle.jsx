import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 47.5px;
  background-color: #000;

  position: relative;
`;

export const BackButton = styled.button`
  border: none;
  background-color: inherit;
  outline: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
`;

export const Content = styled.p`
  position: absolute;
  top: 48%;
  transform: translateY(-50%);
  left: 52px;

  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

export const MoreButton = styled.button`
  border: none;
  background-color: inherit;
  outline: none;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 12px;
`;
