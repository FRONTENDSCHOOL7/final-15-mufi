import React from 'react';
import SearchResultItem from './SearchResultItem';
import { SRContainer } from './SearchResultStyle';
import { useRecoilValue } from 'recoil';
import { searchFestivalState, searchTagsState, searchUserResultState } from '../../../Atoms/atoms';

export default function SearchResult({ 
  isAccount=true, 
  isTag, 
  isFestival }) {

  // 계정 검색
  const searchUserResult = useRecoilValue(searchUserResultState);
  const urlDetails = '/profile'

  // 태그랑 페스티벌
  const searchTags = useRecoilValue(searchTagsState);
  const searchFestival = useRecoilValue(searchFestivalState);
  const urlPostList = '/postlist/';

  return (
    <>
      {isAccount && (
        <SRContainer className="account-result">
          <SearchResultItem data={searchUserResult} url={urlDetails} />
        </SRContainer>
      )}

      {isTag && (
        <SRContainer className="tag-result">
          <SearchResultItem
            data={searchTags}
            url={urlPostList}
            isSth={'tag'}
          />
        </SRContainer>
      )}

      {isFestival && (
        <SRContainer className="festival-result">
          <SearchResultItem
            data={searchFestival}
            url={urlPostList}
            isSth={'festival'}
          />
        </SRContainer>
      )}
    </>
  );
}
