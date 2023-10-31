import React from 'react';
import { InputWrapper, InputLabel, InputArea } from './InputWhiteStyle';

export default function InputWhite({
  label,
  type,
  placeholder,
  required,
  onChange,
  minLength,
  maxLength,
}) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputArea
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        // 사용자 이름에서 필요한 것
        minLength={minLength}
        maxLength={maxLength}
      />
    </InputWrapper>
  );
}
