import React, { useState } from 'react'
import * as H from "./HomeStyle"
import SearchHeader from "../../components/headers/SearchHeader"
import SearchFilter from './serachFilter/SearchFilter'
import SearchResult from './searchResult/SearchResult'

export default function HomeSearch() {
    // 검색 결과 뭔지 상태
    const [isAccount, setIsAccount] = useState(false);
    const [isTag, setIsTag] = useState(false);
    const [isFestival, setIsFestival] = useState(false);
  
  return (

    <>
      <H.HLayout>
        <div style={{"width": "100%"}}>
          <SearchHeader></SearchHeader>
          <SearchFilter setIsAccount={setIsAccount} setIsFestival={setIsFestival} setIsTag={setIsTag}></SearchFilter>
          <SearchResult isAccount={isAccount} isTag={isTag} isFestival={isFestival}></SearchResult>
        </div>

        <H.TempHeader></H.TempHeader>
      </H.HLayout>
    </>
  )
}
