import styled from 'styled-components';

export const FollowButton = styled.button`
  width: 56px;
  height: 28px;

  background-color: ${(props) => props.background || '#2033E7'};
  color: ${(props) => props.color || '#ffffff'};
  border-radius: 4px;
  cursor: pointer;
  border: ${(props) => props.border || 'none'};

  font-weight: 700px;
  font-size: 12px;
`;
