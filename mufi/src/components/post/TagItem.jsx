import React, { useRef } from 'react'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'

export default function TagItem({ tags, isFestival, removeBtn }) {
  const tagItem = useRef();
  const TagItems = tags.map(v=>{
    return (
      <Link>
        { isFestival ? 
        <P.FestivalItem>{v}{removeBtn ? (<P.FestivalRemoveBtn />) : null}</P.FestivalItem> 
        : <P.TagItem ref={tagItem}>{v}{removeBtn ? (<P.RemoveBtn />) : null}</P.TagItem>}
      </Link>
    )
  })

  return (
    <>
      { TagItems } 
    </>
  )
}
