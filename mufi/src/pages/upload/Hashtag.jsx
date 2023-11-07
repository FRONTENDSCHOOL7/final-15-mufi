import React, { useEffect, useState } from 'react';
import * as H from './HashtagStyle';
import UploadHeader from '../../components/headers/UploadHeader';
import searchIcon from '../../assets/icon-search-gray.png';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { tagStoreState, tagsState } from '../../Atoms/atoms';
import TagList from '../../components/post/TagList';

export default function Hashtag() {
  const navigate = useNavigate();
  // 이 안에서 쓰이는 상태
  const [inputText, setInputText] = useState('#');
  const [isResultEmpty, setIsResultEmpty] = useState(false);
  // 이 밖에서 갖고오거나 밖으로 갖고 갈 상태
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagStore, setTagStore] = useRecoilState(tagStoreState)
  const [searchResult, setSearchResult] = useState(tagStore);

  const handleInputChange = async (e) => {
    if(e.target.value.length > 20) {
      e.target.value = e.target.value.slice(0,20);
      alert('20글자 이하까지만 작성할 수 있어요!');
    } else {
      let text = e.target.value;
      if(!text.startsWith('#')){
        setInputText(`#${text}`);
      } else {
        setInputText(text);
      }
      setSearchResult(tagStore.filter(v=>v.includes(e.target.value.slice(1))));
      if(searchResult.length === 0){
        setSearchResult([`${e.target.value}에 대한 검색결과가 없어요 T.T`])
        setIsResultEmpty(true);
      }
    }
  };

  const addSearchResult = async (e) => {
    const newTag = e.target.textContent;
    // console.log(newTag);
    if (!isResultEmpty) {
        setTags((oldTags)=>{
        let newTags;
        if(!oldTags.includes(newTag)){
          newTags = [...oldTags, newTag];
        }
        return newTags;
      });
      navigate('/upload');
    }
  }

  const addTag = () => {
    if(!tagStore.includes(inputText)){
      setTagStore(
        [...tagStore, inputText]
      );
      alert(`${inputText} 태그가 추가되었습니다!`);
    }
    const newTag = inputText;
    setTags((oldTags)=>{
      let newTags;
      if(!oldTags.includes(newTag)){
        newTags = [...oldTags, newTag];
      }
      return newTags;
    });
    navigate('/upload');
  }

  // 태그 삭제
  const handleRemoveTag = (index) => {
    // console.log("remove Tag")
    setTags(oldTags=>oldTags.filter((_,i) => i !== index))
  }

  return (
    <H.HashtagWrapper>
      <UploadHeader showOkButton={false} backButtonText="해시태그 추가" />

      <H.SearchBox>
        <H.SearchInput
          value={inputText}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        />
        <H.SearchButton>
          <img src={searchIcon} alt="search" />
        </H.SearchButton>
      </H.SearchBox>

      <H.TagWrapper>
        {tags.length ? (
          <TagList tags={tags} removeBtn={true} onRemoveClick={handleRemoveTag}></TagList>
        ) : (
          '해시 태그를 검색해서 추가해보세요!'
        )}
      </H.TagWrapper>

      <H.SearchList>
        {searchResult.map((result, index) => (
          <H.SearchResult key={index} onClick={addSearchResult}>
            {result.includes(inputText.slice(1))
              ? result
                  .split(new RegExp(`(${inputText.slice(1)})`, 'g'))
                  .map((str, index, array) => (
                    <>
                      {str === inputText.slice(1) ? (
                        <H.HighlightedText>{inputText.slice(1)}</H.HighlightedText>
                      ) : (
                        str
                      )}
                    </>
                  ))
              : result}
          </H.SearchResult>
        ))}
        {isResultEmpty && <H.AddTagBtn onClick={addTag}>'{inputText}' 태그 추가하기</H.AddTagBtn>}
      </H.SearchList>

    </H.HashtagWrapper>
  );
}
