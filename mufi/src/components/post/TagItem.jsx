import React, { useRef } from 'react'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'

export default function TagItem({ tags, isFestival }) {
    const tagItem = useRef();

    const TagItems = tags.map(v=>{
        return (
            <Link>
                { isFestival ? <P.FestivalItem>{v}</P.FestivalItem> : <P.TagItem ref={tagItem}>{v}</P.TagItem>}
            </Link>
        )
    })

    return (
        <>
            { TagItems } 
        </>
    )
}
