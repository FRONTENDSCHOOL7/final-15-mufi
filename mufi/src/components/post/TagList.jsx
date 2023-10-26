import React from 'react'
import TagItem from './TagItem'
import * as P from './PostStyle'

export default function TagList({ tags }) {
  return (
    <>
        <P.TagList>
            <TagItem tags={tags}/>
        </P.TagList></>
   
  )
}
