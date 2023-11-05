import styled from 'styled-components';

export const AlertCommentWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 260px;
  border-radius: 10px;
  text-align: center;
  border: 0.5px solid #dbdbdb;
  background-color: white;
  z-index: 10;
`;

export const DeleteComment = styled.div`
  padding: 22px 60px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  border-bottom: 0.5px solid #dbdbdb;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CancelButton = styled.button`
  width: 50%;
  padding: 14px 35px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  border-right: 0.5px solid #dbdbdb;
  font-family: inherit;

  border-radius: 10px 0 0 10px;
  outline: none;
  border-left: none;
  border-bottom: none;
  border-top: none;
  background: none;
`;

export const DeleteButton = styled.button`
  width: 50%;
  color: #0019ff;
  padding: 14px 35px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  font-family: inherit;

  border-radius: 10px;
  outline: none;
  border: none;
  background: none;
`;
