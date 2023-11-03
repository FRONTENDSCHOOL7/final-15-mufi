import React from 'react';
import SearchResultItem from './SearchResultItem';
import { SRContainer } from './SearchResultStyle';
import iconTag from '../../../assets/hashtag.png';
import iconFes from '../../../assets/guitar.png';
import { useRecoilValue } from 'recoil';
import { searchUserResultState } from '../../../Atoms/atoms';

export default function SearchResult({ 
  isAccount=true, 
  isTag, 
  isFestival }) {

  // 계정 검색
  const searchUserResult = useRecoilValue(searchUserResultState);
  const urlDetails = '/profile'

  // 태그랑 페스티벌
  const urlPostList = '/postlist/';
  const dataTag = ['박재범', '박재범 타투'];
  const dataFestival = ['감귤 축제', '감귤 많이 먹기 대회'];

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
            img={iconTag}
            data={dataTag}
            url={urlPostList}
          />
        </SRContainer>
      )}

      {isFestival && (
        <SRContainer className="festival-result">
          <SearchResultItem
            img={iconFes}
            data={dataFestival}
            url={urlPostList}
          />
        </SRContainer>
      )}
    </>
  );
}
