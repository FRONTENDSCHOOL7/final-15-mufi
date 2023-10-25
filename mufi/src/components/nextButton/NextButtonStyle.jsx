import styled from 'styled-components';

const NextBtnStyle = styled.button`
  width: 322px;
  line-height: 17px;
  padding: 13px 0px 14px 0px;
  background-color: #2033e7;
  border-radius: 8px;
  color: white;
  border: none;
  margin: 0 auto;

  &:disabled {
    background-color: #1f2241;
    color: #606367;
  }

  &:hover {
    background-color: #495bff;
  }
`;

export default NextBtnStyle;
