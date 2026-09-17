import React, { useState, useEffect, useCallback } from 'react'
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

    const [testData, setTestData] = useState(
        {
            title: "",

        }
    );

    const [commentData, setCommentData] = useState([...currentRecipe.comments]);

    const url = `http://localhost:8080/recipes/recipe/${id}`;
    const testAPI = useCallback(async () => {
        try {
            const data = await fetch(url)
                .then((res) => res.json())
            console.log(data);
            setTestData((data) ? data : {});
        } catch (error) {
            console.error(error.message);
        }
    }, [setTestData]);

    console.log(url);
    
    // FUNCTION TO ADD COMMENT ON INDIVIDUAL RECIPES
    const addComment = (e) => {
        e.preventDefault();
        const currentComment = document.getElementById("commentText").value;
        setCommentData([...commentData, currentComment]);
         document.getElementById("commentText").value = '';
    }

    

    useEffect(() => {
            testAPI();
        },[ testAPI ]);

    return (
        <div className='text-cont individual-recipe-page'>
            <h2>{testData.title}</h2>
            <FontAwesomeIcon icon={faBookmark} />
            <div className='main-img'>
                <img src={testData.mainImageUrl} alt={currentRecipe.title} />
            </div>
             <div className='two-col'>
                <div>
                    <h4>Ingredients</h4>
                    <ul>
                        {testData.ingredients ? testData.ingredients.map((item) => <li>{item.ingredient}</li>) : "Error retrieving ingredient"}
                    </ul>
                </div>
                <div>
                    <h4>Utensils</h4>
                    <ul>
                        {testData.utensils ? testData.utensils.map((item) => <li>{item.utensil}</li>) : "Error retrieving utensil"}
                    </ul>
                </div>
            </div>
            <div>
                <h4>Steps</h4>
                <ol>
                   {testData.steps ? testData.steps.map((item) => <li>{item.stepDesc}</li>) : "Error retrieving step"}
                </ol>
            </div>
            <div>
                <ol>
                   {testData.images ? testData.images.map((item) => <img src={item.imageUrl} />) : "Error retrieving step"}
                </ol>
            </div>
            {/* Transformed Comment Section from here into a separate component */}

        </div>
    )
}
