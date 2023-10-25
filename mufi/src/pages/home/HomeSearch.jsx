import React from 'react'
import * as H from "./HomeStyle"
import SearchHeader from "../../components/headers/SearchHeader"
import SearchFilter from './serachFilter/SearchFilter'
import SearchResult from './searchResult/SearchResult'

export default function HomeSearch() {

  return (

    <>
      <H.HLayout>
        <div style={{"width": "100%"}}>
          <SearchHeader></SearchHeader>
          <SearchFilter></SearchFilter>
          <SearchResult></SearchResult>
        </div>

        <H.TempHeader></H.TempHeader>
      </H.HLayout>
    </>
  )
}
