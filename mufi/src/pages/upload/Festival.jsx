import React, { useState } from 'react';
import * as F from './FestivalStyle';
import UploadHeader from '../../components/uploadheader/UploadHeader';
import searchIcon from '../../assets/icon-search-gray.png';

export default function Festival() {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputInput] = useState('');
  // 검색 결과를 저장할 state
  const [searchResult, setSearchResult] = useState([]);
  // 검색 결과 있는지 없는지 확인하는 state
  const [isResultEmpty, setIsResultEmpty] = useState(false);

  // 검색 결과를 가져오는 함수
  const fetchSearchResult = async () => {
    // 임시로 검색 결과를 만듬
    const result = ['애월읍 페스티벌', '애월읍 락락 페스티벌'];

    if (inputText === '한라산') {
      setSearchResult([`${inputText}에 대한 검색 결과가 없어요 ㅜ_ㅜ`]);
      setIsResultEmpty(true);
    } else {
      setSearchResult(result);
      setIsResultEmpty(false);
    }
    setSearchText(inputText);
  };

  const handleInputChange = (e) => {
    let text = e.target.value;
    setInputInput(text);
  };

  return (
    <F.FestivalWrapper>
      <UploadHeader showOkButton={false} backButtonText="페스티벌 추가" />
      <F.SearchBox>
        <F.SearchInput
          value={inputText}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <F.SearchButton onClick={fetchSearchResult}>
          <img src={searchIcon} alt="search" />
        </F.SearchButton>
      </F.SearchBox>
      <F.SearchList>
        {searchResult.map((result, index) => (
          <F.SearchResult key={index}>
            {result
              .split(new RegExp(`(${searchText})`))
              .map((part, index) =>
                part.trim() === searchText.trim() ? (
                  <F.HighlightedText key={index}>{part}</F.HighlightedText>
                ) : (
                  part
                )
              )}
          </F.SearchResult>
        ))}
      </F.SearchList>
      {isResultEmpty && <F.AddTagBtn>태그 추가하기</F.AddTagBtn>}
    </F.FestivalWrapper>
  );
}
