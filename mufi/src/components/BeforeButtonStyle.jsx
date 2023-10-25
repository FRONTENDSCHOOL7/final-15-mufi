import styled from 'styled-components';

export const BeforeButtonStyle = styled.button`
  width: 120px;
  line-height: 44px;
//   padding: 13px 0px 14px 0px;
  background-color: #2033e7;
  pont-size: 14px;
  border-radius: 8px;
  color: white;
  border: none;
  margin-top: 422px;

  &:disabled {
    background-color: #1f2241;
    color: #606367;
  }

  &:hover {
    background-color: #495bff;
  }
`;

export default BeforeButtonStyle;