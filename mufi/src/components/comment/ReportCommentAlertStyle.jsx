import styled from 'styled-components';

export const CompleteReport = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 260px;
  padding: 50px 50px;

  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #dbdbdb;
  background-color: white;
  z-index: 10;
`;

export const CancelBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: none;
  outline: none;
  background: none;
`;
