import React, { useEffect, useRef } from 'react';
import { InputWrapper, InputLabel, InputArea } from './InputStyle';

export default function Input({
  label,
  type,
  placeholder,
  required,
  onChange,
  minLength,
  maxLength,
  onBlur,
  styleEdit,
  defaultValue,
}) {
  const inputEl = useRef();
  
  useEffect(()=>{
    if (defaultValue) {
      inputEl.current.value = defaultValue;
    }
  }, [])

  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputArea
        ref={inputEl}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        // 사용자 이름에서 필요한 것
        minLength={minLength}
        maxLength={maxLength}
        onBlur={onBlur}
        style={styleEdit}
      />
    </InputWrapper>
  );
}
