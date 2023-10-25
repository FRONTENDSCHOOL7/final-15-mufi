import React from 'react';
import * as SR from './SearchResultStyle';

export default function SearchResultItem({ data, img, moveTo, setIs }) {
  
  const SRItems = data.map(v=>{
    return (
      <SR.SRItem onClick={moveTo}>
        <SR.ResultProfile>
          <img src={(v.img || img)} alt="icon" />
        </SR.ResultProfile> 
        <SR.ResultText>
          <SR.ResultTitle>
              {v.title || v} <strong>애월읍</strong>
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
