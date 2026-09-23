import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as fullBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as lineBookmark } from '@fortawesome/free-regular-svg-icons';
import '../pages/IndividualRecipe.css'

export default function RecipeBookmark( {saved, unsaveRecipe, saveRecipe} ) {
  return (
    <span className="button-span">
        {saved ? 
            <button onClick={unsaveRecipe}><FontAwesomeIcon icon={fullBookmark} /></button> 
            : <button onClick={saveRecipe}><FontAwesomeIcon icon={lineBookmark} /></button>
        }
    </span>
  )
}
