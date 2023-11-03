import React, { useEffect, useRef } from 'react'
import * as SH from './SearchHeaderStyle'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import { festivalStoreState, keywordState, searchFestivalState, searchTagsState, searchUserResultState, tagStoreState, userTokenState } from '../../Atoms/atoms';
import { searchUserAPI } from '../../api/serachUserAPI';

// 뒤로가기 + 검색 버튼+ 검색창
export default function SearchHeader({
  isAccount,
  isTag,
  isFestival
}) {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const setSearchUserResult = useSetRecoilState(searchUserResultState);
  const [searchTags, setSearchTags] = useRecoilState(searchTagsState);
  const [searchFestival, setSearchFestival] = useRecoilState(searchFestivalState);
  const tagsStore = useRecoilValue(tagStoreState);
  const festivalStore = useRecoilValue(festivalStoreState);
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
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/g
    if(e.target.value.match(regExp)){
      alert('특수문자는 특수문자(.),(_)만 포함할 수 있습니다!');
      e.target.value = e.target.value.slice(0,-1);
    } else {
      setKeyword(e.target.value);
    }
  }

  // 검색버튼
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (searchInput.current.value === '') {
        alert('검색어를 입력 해주세요!');
      } else {
        // isAccount 상태에서 검색버튼이 눌렸다면
        if(isAccount){
          let res = await searchUserAPI({ token, keyword });

          // 긴 데이터는 일단 자르기
          if (res.length > 10) {
            console.log('데이터의 길이가 너무 깁니다!', res);
            res = await res.slice(0, 50);
            setSearchUserResult(res);
          // 검색결과 없으면 없다는 데이터 넣어주기
          } else if (res.length === 0) {
            setSearchUserResult([{
              username : `${keyword}에 대한 검색결과가 없습니다. T.T`
            }]);
          } else {
            setSearchUserResult(res);
          }
        // isTag 상태에서 버튼이 눌린다면
        } else if (isTag) {
          setSearchTags(tagsStore.filter(v=>v.includes(keyword)));
          if (searchTags.length === 0) {
            setSearchTags([`${keyword}에 대한 검색결과가 없습니다. T.T`])
          }
        } else if (isFestival) {
          setSearchFestival(festivalStore.filter(v=>v.includes(keyword)));
          if (searchFestival.length === 0) {
            setSearchFestival([`${keyword}에 대한 검색결과가 없습니다. T.T`])
          }
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
    // 태그랑 페스티벌 결과 초기화
    setSearchFestival(festivalStore);
    setSearchTags(tagsStore);
    // eventlistener달기
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
            placeholder='계정, 태그, 페스티벌로 검색하기!'
            onChange={handleChange}></SH.HeaderSearchInput>
          <SH.SearchBtn 
            ref={submitBtn}
            type='submit'></SH.SearchBtn>
        </SH.SearchForm>
      </SH.HeaderWrapper>
    </>
  )
}
