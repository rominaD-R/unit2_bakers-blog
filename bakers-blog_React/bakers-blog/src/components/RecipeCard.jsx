import React from 'react'
import { Routes, Route, Link } from 'react-router';
import Tag from './Tag';

const mainImageDummy = 'https://images.unsplash.com/photo-1716237388704-941721c1dbbf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function RecipeCard( { recipe } ) {
  return (
    <div className='recipe-card'>
      <Link className='link-recipe' to={`/recipe/${recipe.id}`}>
        <div className='recipe-card-img'>
            <img src={recipe.mainImageUrl} alt={recipe.title} />
        </div>
      </Link>
      <div className='recipe-card-text'>
        <Link className='link-recipe' to={`/recipe/${recipe.id}`}>
          <h4>{recipe.title}</h4>
        </Link>
        {recipe.tags.map((tag) => <Tag tag={tag.tag} />)}
      </div>
    </div>
  )
}
