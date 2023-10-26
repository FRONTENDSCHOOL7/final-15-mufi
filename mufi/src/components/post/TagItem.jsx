import React from 'react'
import * as P from './PostStyle'
import { Link } from 'react-router-dom'

export default function TagItem({ tags }) {

    const TagItems = tags.map(v=>{
        return (
            <Link>
                <P.TagItem>#{v}</P.TagItem>
            </Link>
        )
    })

    return (
        <>
            { TagItems } 
        </>
    )
}
