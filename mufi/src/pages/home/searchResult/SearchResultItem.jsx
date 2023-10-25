import React from 'react';
import * as SR from './SearchResultStyle';

export default function SearchResultItem({ data }) {

  const SRItems = data.map(v=>{
    return (
      <SR.SRItem>
        <SR.ResultProfile>
          <img src={v.img} alt="" />
        </SR.ResultProfile> 
        <SR.ResultText>
          <SR.ResultTitle>
              {v.title} <strong>애월읍</strong>
          </SR.ResultTitle>
          {v.content && <SR.ResultContent>
            @{v.content}
          </SR.ResultContent>}
        </SR.ResultText>
      </SR.SRItem>
    )
  })

  return (
    <>
      { SRItems }
    </>
  )
}
