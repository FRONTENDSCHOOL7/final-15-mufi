import React, { useState } from 'react';
import * as F from './FestivalStyle';
import UploadHeader from '../../components/headers/UploadHeader';
import searchIcon from '../../assets/icon-search-gray.png';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { festivalState } from '../../Atoms/atoms';

export default function Festival() {
  const [searchText, setSearchText] = useState('');
  const [inputText, setInputInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  const setFestival = useSetRecoilState(festivalState);
  const navigate = useNavigate();


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

  const addSearchResult = async (e) => {
    const festival = e.target.textContent;
    console.log(festival);
    setFestival([festival])
    navigate('/upload')
  }

  document.addEventListener('keydown', async (e) => {
    if (e.key === "Enter") {
      await fetchSearchResult();
    }
  })

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
          <F.SearchResult key={index} onClick={addSearchResult}>
            {result.split(new RegExp(`(${searchText})`)).map((part, index) =>
              part.trim() === searchText.trim() ? (
                <F.HighlightedText
                  key={index}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {part}
                </F.HighlightedText>
              ) : (
                <span style={{ whiteSpace: 'pre-wrap' }}>{part}</span>
              )
            )}
          </F.SearchResult>
        ))}
      </F.SearchList>

      {isResultEmpty && <F.AddTagBtn>태그 추가하기</F.AddTagBtn>}
    </F.FestivalWrapper>
  );
}
