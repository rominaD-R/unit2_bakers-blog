import React, { useState } from 'react'
import { useParams, Link } from 'react-router';
import { recipeMockData } from '../data/recipes'
import CommentSection from '../components/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import './IndividualRecipe.css'

export default function IndividualRecipe() {

    const { id } = useParams();                                                 // Get ID of recipe from the URL, passed by the RecipeCard that was clicked on
    let currentRecipe = recipeMockData.filter((item) => item.id == id);         // Find the recipe in the array from the ID
    currentRecipe = currentRecipe[0];                                           // The currentRecipe returned from line 10 is returned in an array, so this is to make it as a single object

    const [commentData, setCommentData] = useState([...currentRecipe.comments]);

    // FUNCTION TO ADD COMMENT ON INDIVIDUAL RECIPES
    const addComment = (e) => {
        e.preventDefault();
        const currentComment = document.getElementById("commentText").value;
        setCommentData([...commentData, currentComment]);
         document.getElementById("commentText").value = '';
    }

    return (
        <div className='text-cont individual-recipe-page'>
            <h2>{currentRecipe.title}</h2>
            <FontAwesomeIcon icon={faBookmark} />
            <div className='main-img'>
                <img src={currentRecipe.mainImage} alt={currentRecipe.title} />
            </div>
            <div className='two-col'>
                <div>
                    <h4>Ingredients</h4>
                    <ul>
                        {currentRecipe.ingredients.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4>Utensils</h4>
                    <ul>
                        {currentRecipe.utensils.map((item) => <li>{item}</li>)}
                    </ul>
                </div>
            </div>
            <div>
                <h4>Steps</h4>
                <ol>
                    {currentRecipe.steps.map((item) => <li>{item}</li>)}
                </ol>
            </div>
            {/* Transformed Comment Section from here into a separate component */}
            <CommentSection comments={commentData} onAdd={addComment} />
        </div>
    )
}
