import React from 'react'
import TagItem from './TagItem'
import * as P from './PostStyle'

export default function TagList({ tags, isFestival }) {
  return (
    <>
        <P.TagList >
            <TagItem tags={tags} isFestival={isFestival}/>
        </P.TagList></>
   
  )
}
