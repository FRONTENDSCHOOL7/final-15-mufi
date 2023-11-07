import React, { useRef } from 'react'
import * as P from './PostStyle'

export default function TagItem({ tags, isFestival, removeBtn, onRemoveClick }) {
  const tagItem = useRef();
  const TagItems = tags.map((v, i)=>{
    return (
      <>
        { isFestival ? 

        <P.FestivalItem 
          key={i}>{v}{removeBtn ? 
          (<P.FestivalRemoveBtn 
          type="button" 
          className="remove-btn"
          onClick={() => onRemoveClick(i)}/>) : null}
        </P.FestivalItem> : 

        <P.TagItem 
          key={i}
          ref={tagItem}>{v}{removeBtn ? 
          (<P.RemoveBtn 
            type="button"
            className="remove-btn"
            onClick={() => onRemoveClick(i)}/>) : null}
        </P.TagItem> }

      </>
    )
  })

  return (
    <>
      { TagItems } 
    </>
  )
}
