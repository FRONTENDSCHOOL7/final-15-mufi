import React from 'react'
import * as SH from './SearchHeaderStyle'
import { useNavigate } from 'react-router-dom';

// 뒤로가기 + 검색 버튼+ 검색창
export default function SearchHeader() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <SH.HeaderWrapper>
        <SH.HeaderBtn onClick={handleGoBack}></SH.HeaderBtn>
        <SH.SearchContainer>
          <SH.HeaderSearchInput placeholder='유저 검색'></SH.HeaderSearchInput>
          <SH.SearchBtn type='submit'></SH.SearchBtn>
        </SH.SearchContainer>
      </SH.HeaderWrapper>
    </>
  )
}
