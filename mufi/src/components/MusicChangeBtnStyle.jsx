import styled from 'styled-components';

const MusicChangeBtn = styled.button`
  width: 150px;
  height: 34px;
  line-height: 17px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  color: #767676;
  margin: -15px 0px 44px 0px;
  border: 1px solid #767676;

  &:disabled {
    background-color: #f2f2f2;
    color: #767676;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default MusicChangeBtn;
