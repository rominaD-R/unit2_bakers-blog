import React from 'react'
import RecipeCard from './RecipeCard'
import './css/CardsRows.css'

export default function CardsRow( { heading, list } ) {
  return (
    <div className='recipe-list'>
        <h2>{heading}</h2>
        <div className='cards-row'>
            {/* {list.length >= 4 && (                  // used ChatGPT to read info from API
              <>
                <RecipeCard recipe={list[0]} />
                <RecipeCard recipe={list[1]} />
                <RecipeCard recipe={list[2]} />
                <RecipeCard recipe={list[3]} />
              </>
            )} */}
            {list && list.map((recipe) => <RecipeCard recipe={recipe} />)}
        </div>
    </div>
  )
}
