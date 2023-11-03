import React, { useEffect, useState } from 'react';
import * as F from './FestivalStyle';
import UploadHeader from '../../components/headers/UploadHeader';
import searchIcon from '../../assets/icon-search-gray.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { festivalState, festivalStoreState } from '../../Atoms/atoms';

export default function Festival() {
  const navigate = useNavigate();
  // 이 안에서 쓰이는 상태
  const [inputText, setInputText] = useState('');
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  // 이 밖에서 갖고오거나 밖으로 갖고 갈 상태
  const setFestival = useSetRecoilState(festivalState);
  const [festivalStore, setFestivalStore] = useRecoilState(festivalStoreState);
  const [searchResult, setSearchResult] = useState(festivalStore);

  const handleInputChange = async (e) => {
    if (e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0,20);
      alert('20글자 이하까지만 작성할 수 있어요!');
    } else {
      setInputText(e.target.value);
      setSearchResult(festivalStore.filter(v=>v.includes(e.target.value)));
    if(searchResult.length === 0){
      setSearchResult([`${inputText}에 대한 검색결과가 없어요 T.T`])
      setIsResultEmpty(true);
    }
    }
  };

  const addSearchResult = (e) => {
    const festival = e.target.textContent;
    setFestival([festival]);
    navigate('/upload');
  }

  const addFestival = () => {
    if(!festivalStore.includes(inputText)){
      setFestivalStore(
        [...festivalStore, inputText]
      );
      alert(`#${inputText} (이)가 추가되었습니다!`);
    }
    setFestival([inputText]);
    navigate('/upload');
  }

  // useEffect(() => {
  //   document.addEventListener('keydown', async (e) => {
  //     if (e.key === "Enter") {
  //       await fetchSearchResult();
  //     }
  //   })

  //   return () => {
  //     document.removeEventListener('keydown', async (e) => {
  //       if (e.key === "Enter") {
  //         await fetchSearchResult();
  //       }
  //     })
  //   }
  // }, []);

  return (
    <F.FestivalWrapper>
      <UploadHeader showOkButton={false} backButtonText="페스티벌 추가" />
      <F.SearchBox>
        <F.SearchInput
          value={inputText}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <F.SearchButton>
          <img src={searchIcon} alt="search" />
        </F.SearchButton>
      </F.SearchBox>

      <F.SearchList>
        {searchResult.map((result, index) => (
          <F.SearchResult key={index} onClick={addSearchResult}>
            {result.split(new RegExp(`(${inputText})`)).map((part, index) =>
              part.trim() === inputText.trim() ? (
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

      {isResultEmpty && <F.AddTagBtn onClick={addFestival}>'{inputText}' 추가하기</F.AddTagBtn>}
    </F.FestivalWrapper>
  );
}
