import React from 'react'
import TagItem from './TagItem'
import * as P from './PostStyle'

export default function TagList({ tags, isFestival, removeBtn, onRemoveClick}) {
  return (
    <>
        <P.TagList >
            <TagItem tags={tags} isFestival={isFestival} removeBtn={removeBtn} onRemoveClick={onRemoveClick}/>
        </P.TagList></>
   
  )
}
