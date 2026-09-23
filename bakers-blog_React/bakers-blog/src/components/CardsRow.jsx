import React from 'react'
import RecipeCard from './RecipeCard'
import './css/CardsRows.css'

export default function CardsRow( { heading, list } ) {
  return (
    <div className='recipe-list'>
        <h2>{heading}</h2>
        <div className='cards-row'>
            {list && list.map((recipe) => <RecipeCard recipe={recipe} />)}
        </div>
    </div>
  )
}
