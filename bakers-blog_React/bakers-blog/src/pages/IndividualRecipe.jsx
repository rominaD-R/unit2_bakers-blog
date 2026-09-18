import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router';
import { recipeMockData } from '../data/recipes'
import CommentSection from '../components/CommentSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as fullBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as lineBookmark } from '@fortawesome/free-regular-svg-icons';
// import { faBookmark } from '@fortawesome/free-line-svg-icons';
import './IndividualRecipe.css'
import { useStateContext } from '../ContextProvider'

export default function IndividualRecipe() {

    const { id } = useParams();                                                 // Get ID of recipe from the URL, passed by the RecipeCard that was clicked on
    let recipeId = id;
    let currentRecipe = recipeMockData.filter((item) => item.id == id);         // Find the recipe in the array from the ID
    currentRecipe = currentRecipe[0];                                           // The currentRecipe returned from line 10 is returned in an array, so this is to make it as a single object

    const [recipeData, setrecipeData] = useState(
        {
            title: "",

        }
    );

    const [commentData, setCommentData] = useState([...currentRecipe.comments]);
    const { token, setToken, user, setUser } = useStateContext();
    const [saved, setSaved] = useState(false);

    const url = `http://localhost:8080/recipes/recipe/${id}`;
    const testAPI = useCallback(async () => {
        try {
            const data = await fetch(url)
                .then((res) => res.json())
            console.log(data);
            setrecipeData((data) ? data : {});
        } catch (error) {
            console.error(error.message);
        }
    }, [setrecipeData, url]);

    const isRecipeSaved = useCallback(async () => {
        if (user != null) {
            let url = `http://localhost:8080/users/user/${user.id}/savedrecipes`;
            try {
                const data = await fetch(url).then((res) => res.json());
                console.log("User's saved recipes:  ");
                console.log(data);
                console.log("TRYING TO FIND RECIPE IN USERS SAVED RECIPES")
                const isSaved = data.find(({ id }) => id == recipeId);
                console.log("DID WE GET THE OBJECT???")
                console.log(isSaved);
                if (isSaved) {
                    setSaved(true);
                } else {
                    setSaved(false);
                }
            } catch (error) {
                console.log("Error:");
                console.error(error.message);
            }
        }
    }, [user, recipeId]);

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
            if (user && user.id) {
                console.log(user);
                isRecipeSaved();
            }
        },[ testAPI, user, isRecipeSaved ]);

    return (
        <div className='text-cont individual-recipe-page'>
            <h2>{recipeData.title}</h2>
            {saved ? 
            <FontAwesomeIcon icon={fullBookmark} /> :
            <FontAwesomeIcon icon={lineBookmark} />
            }
            <div className='main-img'>
                <img src={recipeData.mainImageUrl} alt={currentRecipe.title} />
            </div>
             <div className='two-col'>
                <div>
                    <h4>Ingredients</h4>
                    <ul>
                        {recipeData.ingredients ? recipeData.ingredients.map((item) => <li>{item.ingredient}</li>) : "Error retrieving ingredient"}
                    </ul>
                </div>
                <div>
                    <h4>Utensils</h4>
                    <ul>
                        {recipeData.utensils ? recipeData.utensils.map((item) => <li>{item.utensil}</li>) : "Error retrieving utensil"}
                    </ul>
                </div>
            </div>
            <div>
                <h4>Steps</h4>
                <ol>
                   {recipeData.steps ? recipeData.steps.map((item) => <li>{item.stepDesc}</li>) : "Error retrieving step"}
                </ol>
            </div>
            <div>
                <ol>
                   {recipeData.images ? recipeData.images.map((item) => <img src={item.imageUrl} />) : "Error retrieving step"}
                </ol>
            </div>
            {/* Transformed Comment Section from here into a separate component */}

        </div>
    )
}
