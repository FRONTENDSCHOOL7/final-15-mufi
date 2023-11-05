import React, { useState } from 'react';
import UploadHeader from "../../components/headers/UploadHeader";
import * as M from './MusicAddStyle';
import musicicon from '../../assets/music-cover.png';
import searchIcon from '../../assets/icon-search.png'; 

export default function MusicAdd() {
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [allSongs, setAllSongs] = useState([
    { id: 1, title: "후라이의 꿈", artist: "AKMU", isSelected: false },
    { id: 2, title: "계란 후라이", artist: "재미재미쏭쏭", isSelected: false }
  ]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSearch = () => {
    const filteredResults = allSongs.filter(song => 
      song.title.includes(inputText) || song.artist.includes(inputText)
    );
    setSearchResult(filteredResults);
  };

  const handleSearchClick = () => {
    if (inputText === '') {
      setSearchResult([]);
    } else {
      handleSearch();
    }
  };

  const toggleSelection = (id) => {
    setSearchResult(prevResults => 
      prevResults.map(result => {
        if (result.id === id) {
          return { ...result, isSelected: !result.isSelected };
        }
        if (result.isSelected) {
          return { ...result, isSelected: false };
        }
        return result;
      })
    );
  };

  const splitText = (text, query) => {
    const splitRegex = new RegExp(`(${query})`, 'gi');
    return text.split(splitRegex).map((chunk, index) => {
      return {
        text: chunk,
        isMatch: chunk.toLowerCase() === query.toLowerCase()
      };
    });
  };

  return (
    <M.HashtagWrapper>
      <UploadHeader okButtonText="추가" backButtonText="프로필 뮤직 추가" />
      <M.SearchBox>
        <M.SearchInput
          value={inputText}
          onChange={handleInputChange}
          placeholder="곡, 앨범, 아티스트 명으로 검색"
        />
        <M.SearchButton onClick={handleSearchClick}>
          <img src={searchIcon} alt="search" />
        </M.SearchButton>
      </M.SearchBox>

      <M.SearchList>
        {searchResult.map((result) => {
          const titleParts = splitText(result.title, inputText);
          const artistParts = splitText(result.artist, inputText);
          return (
            <M.SearchResult key={result.id}>
              <img src={musicicon} alt="music icon" style={{ marginRight: '10px' }} />
              <div>
                <M.Title>
                  {titleParts.map((part, index) => part.isMatch ? <span key={index} style={{color: 'blue'}}>{part.text}</span> : part.text)}
                </M.Title>
                <M.Artist>
                  {artistParts.map((part, index) => part.isMatch ? <span key={index} style={{color: 'blue'}}>{part.text}</span> : part.text)}
                </M.Artist>
              </div>
              {result.isSelected ? (
                <M.SelectedButton onClick={() => toggleSelection(result.id)}>선택됨</M.SelectedButton>
              ) : (
                <M.SelectButton onClick={() => toggleSelection(result.id)}>선택</M.SelectButton>
              )}
            </M.SearchResult>
          );
        })}
      </M.SearchList>
    </M.HashtagWrapper>
  );
}
