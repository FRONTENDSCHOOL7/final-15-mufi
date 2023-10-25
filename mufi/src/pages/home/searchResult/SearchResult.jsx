import React from 'react'
import SearchResultItem from './SearchResultItem'
import { SRContainer } from './SearchResultStyle'
import img from '../../../assets/basic-profile-small.png'
import iconTag from '../../../assets/hashtag.png'
import iconFes from '../../../assets/guitar.png'

export default function SearchResult() {

  const data = [{
    img,
    title: '위니브 애월읍',
    content: 'weniv_aewol',
  },
  {
    img,
    title: '위니브 감귤농장',
    content: 'weniv_tangerin'
  }]

  const dataTag = [{
    img: iconTag,
    title: "박재범",
  },{
    img: iconTag,
    title: "박재범 타투"
  }
  ]

  const dataFestival = [{
    img: iconFes,
    title: "감귤 축제"
  },{
    img: iconFes,
    title: "감귤 많이 먹기 대회"
  }]

  return (
    <>
      <SRContainer className="account-result">
        <SearchResultItem data={data} />
      </SRContainer>

      <SRContainer className="tag-result">
        <SearchResultItem data={dataTag} className="tag" />
      </SRContainer>    

      <SRContainer className="festival-result">
        <SearchResultItem data={dataFestival} className="festival"/>
      </SRContainer>
    </>
  )
}
