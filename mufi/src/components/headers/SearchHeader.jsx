import React, { useEffect, useRef } from 'react'
import * as SH from './SearchHeaderStyle'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { keywordState, searchUserResultState, userTokenState } from '../../Atoms/atoms';
import { searchUserAPI } from '../../api/serachUserAPI';

// 뒤로가기 + 검색 버튼+ 검색창
export default function SearchHeader() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setSearchUserResult = useSetRecoilState(searchUserResultState);
  const token = useRecoilValue(userTokenState);

  const searchInput = useRef();
  const submitBtn = useRef();
  const navigate = useNavigate();

  const handleGoBack = () => {
    setKeyword('');
    setSearchUserResult([]);
    navigate(-1);
  };

  // 검색어
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        if (searchInput.current.value === '') {
        alert('검색어를 입력 해주세요!');
      } else { // 검색어 
        let res = await searchUserAPI({ token, keyword });

        // 긴 데이터는 일단 자르기
        if (res.length > 10) {
          console.log('데이터의 길이가 너무 깁니다!', res);
          res = await res.slice(0, 50);
          setSearchUserResult(res);
        } else if (res.length === 0) {
          setSearchUserResult([{
            username : `${keyword}에 대한 검색결과가 없습니다. T.T`
          }]);
        } else {
          setSearchUserResult(res);
        }
      }
    } catch {
      console.alert('오류발생~')
    }
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      submitBtn.current.click();
    }
  }

  const handleFocus = (e) => {
    searchInput.current.focus();
  }

  useEffect(()=>{
    document.addEventListener('keypress', handleEnter)
    return () => {
      document.removeEventListener('keypress', handleEnter)
    }
  }, [])

  return (
    <>
      <SH.HeaderWrapper>
        <SH.HeaderBtn onClick={handleGoBack}></SH.HeaderBtn>
        <SH.SearchForm onSubmit={handleSubmit} onClick={handleFocus}>
          <SH.HeaderSearchInput 
            ref={searchInput}
            placeholder='유저 검색'
            onChange={handleChange}></SH.HeaderSearchInput>
          <SH.SearchBtn 
            ref={submitBtn}
            type='submit'></SH.SearchBtn>
        </SH.SearchForm>
      </SH.HeaderWrapper>
    </>
  )
}
