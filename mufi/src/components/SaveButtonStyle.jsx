import styled from 'styled-components';

const  SaveButton= styled.button`
  width: 90px;
  height:32px;
  line-height: 17px;
  background-color: #2033e7;
  border-radius: 8px;
  color: white;
  border: none;
 position: absolute;
  top: 50%;
  right: 12px;
   transform: translateY(-50%);
  

  &:disabled {
    background-color: #1f2241;
    color: #606367;
  }

  &:hover {
    background-color: #495bff;
  }
`;

export default SaveButton;
