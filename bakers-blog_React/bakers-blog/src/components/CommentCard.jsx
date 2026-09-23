import React from 'react'
import { Routes, Route, Link } from 'react-router';
import './css/CommentCard.css'

export default function CommentCard( {comment} ) {
  return (
    <Link className='link-recipe' to={`/recipe/${comment.recipeid}`}>
        <div className='comment-card'>
            {comment.content}
        </div>
    </Link>
  )
}
