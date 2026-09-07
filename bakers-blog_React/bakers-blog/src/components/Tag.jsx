import React from 'react'
import { Routes, Route, Link } from 'react-router';

export default function Tag( { tag } ) {
  return (
    <Link to={`/types/${tag}`}>
        <button className='tag-btn'>
            {tag}
        </button>
    </Link>
  )
}
