import React, { useState } from 'react';
import * as H from "./HomeStyle";
import SearchHeader from "../../components/headers/SearchHeader";
import SearchFilter from './serachFilter/SearchFilter';
import SearchResult from './searchResult/SearchResult';

export default function HomeSearch() {
  // 검색 결과 뭔지 상태
  const [isAccount, setIsAccount] = useState(true);
  const [isTag, setIsTag] = useState(false);
  const [isFestival, setIsFestival] = useState(false);

  return (
    <>
      <H.HLayout>
        <SearchHeader isAccount={isAccount} isTag={isTag} isFestival={isFestival}></SearchHeader>
        <SearchFilter setIsAccount={setIsAccount} setIsFestival={setIsFestival} setIsTag={setIsTag}></SearchFilter>

        <H.HomeSearch>

          {/* 검색결과 */}
          <SearchResult isAccount={isAccount} isTag={isTag} isFestival={isFestival} />
        </H.HomeSearch>
        
      </H.HLayout>
    </>
  )
}
