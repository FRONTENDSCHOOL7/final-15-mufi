import React, { useState } from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import HomeEmpty from './HomeEmpty'
import * as H from "./HomeStyle"
import SearchHeader from "../../components/headers/SearchHeader"


export default function HomeSearch() {

  return (

    <>
      <H.HLayout>
        <SearchHeader></SearchHeader>
        <H.TempHeader></H.TempHeader>
      </H.HLayout>
    </>
  )
}
