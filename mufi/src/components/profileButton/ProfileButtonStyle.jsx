import styled from 'styled-components';

export const ProfileButton = styled.button`
  width: 120px;
  height: 34px;

  background-color: ${(props) => props.background || '#2033E7'};
  color: ${(props) => props.color || '#ffffff'};
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) => props.border || 'none'};

  font-weight: 700;
  font-size: 14px;
`;
