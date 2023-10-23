import styled from 'styled-components';

// InputLabel과 UserInput 컴포넌트 묶는 역할 + props 전달 역할
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 322px;

  padding-bottom: 16px;
`;

// Input과 함께 사용할 label 태그
export const InputLabel = styled.label`
  font-size: 12px;
  color: #767676;
  text-align: left;
`;

// 사용자 입력 Input 태그
export const InputArea = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  height: 30px;

  font-size: 14px;
  outline: none;

  background-color: #000;
  color: #fff;

  &::placeholder {
    color: #dbdbdb;
  }

  &:focus {
    outline: none;
    border-bottom: 1px solid #767676;
  }
`;
