import React from 'react'
import HomeHeader from '../../components/headers/HomeHeader'
import HomeEmpty from './HomeEmpty'
import * as H from "./HomeStyle"


export default function Home() {
  return (
    <>
      <H.HLayout>
        <HomeHeader/>
        <HomeEmpty></HomeEmpty>
        <H.TempHeader></H.TempHeader>
      </H.HLayout>
    </>
  )
}
