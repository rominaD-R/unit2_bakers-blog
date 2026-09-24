import React, { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router';
import { recipeMockData } from '../data/recipes'
import CommentSection from '../components/CommentSection';
import RecipeBookmark from '../components/RecipeBookmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark as fullBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as lineBookmark } from '@fortawesome/free-regular-svg-icons';
import './IndividualRecipe.css'
import { useStateContext } from '../ContextProvider'

export default function IndividualRecipe() {

    const { id } = useParams();                                                 // Get ID of recipe from the URL, passed by the RecipeCard that was clicked on
    let recipeId = id;

    const [recipeData, setrecipeData] = useState(
        {
            title: "",
        }
    );

    const { token, setToken, user, setUser } = useStateContext();
    const [saved, setSaved] = useState(false);

    const url = `http://localhost:8080/recipes/recipe/${id}`;
    const getRecipeData = useCallback(async () => {
        try {
            const data = await fetch(url)
                .then((res) => res.json())
            console.log(data);
            setrecipeData((data) ? data : {});
        } catch (error) {
            console.error(error.message);
        }
    }, [setrecipeData, url]);

    const refreshRecipeData = async () => {
        try {
            const data = await fetch(url)
                .then((res) => res.json())
            console.log(data);
            setrecipeData((data) ? data : {});
        } catch (error) {
            console.error(error.message);
        }
    }

    // Checking if the current logged in user has saved the specific recipe or not
    const isRecipeSaved = useCallback(async () => {
        if (user != null) {
            let url = `http://localhost:8080/users/user/${user.id}/savedrecipes`;
            try {
                const data = await fetch(url).then((res) => res.json());
                const isSaved = data.find(({ id }) => id == recipeId);
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

    // Removing/Unsaving a recipe from user's account
    const unsaveRecipe = async () => {
        let url = `http://localhost:8080/users/user/${user.id}/recipe/${recipeId}`;
        try {
            const data = await fetch(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            console.log(data);
            setSaved(false);
        } catch (error) {
            console.log("Error:");
            console.error(error.message);
        }
    }

    // Saving a recipe to the user's account
    const saveRecipe = async () => {
        let url = `http://localhost:8080/users/user/${user.id}/recipe/${recipeId}`;
        try {
            const data = await fetch(url, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: user.username,
                    id: user.id,

                })
            })
            .then((res) => res.json());
            console.log(data);
            setSaved(true);
        } catch (error) {
            console.log("Error:");
            console.error(error.message);
        }
    }
    
    // FUNCTION TO ADD COMMENT ON INDIVIDUAL RECIPES
    const addComment = async (e) => {
        e.preventDefault();
        const currentComment = document.getElementById("commentText").value;
        const url = `http://localhost:8080/comments/add/${recipeId}/${user.id}`;
        try {
            const data = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    content: currentComment
                })
            })
            console.log(data);
            getRecipeData();                                                    // To refresh and show newly added comment
        } catch (error) {
            console.log("Error:");
            console.error(error.message);
        }
        document.getElementById("commentText").value = '';
    }
    
    // Load recipe data when user clicks on recipe card/link
    useEffect(() => {
        getRecipeData();
        if (user && user.id) {
            isRecipeSaved();
        }
    },[ getRecipeData, user, isRecipeSaved ]);

    return (
        <div className='text-cont individual-recipe-page'>
            <div id='titleTop'>
                <h2>{recipeData.title}</h2>
                {user && <RecipeBookmark saved={saved} unsaveRecipe={unsaveRecipe} saveRecipe={saveRecipe} />} 
            </div>
            <div className='main-img'>
                {recipeData.mainImageUrl ?
                    <img src={recipeData.mainImageUrl} alt={recipeData.title} />
                    : "Error retrieving image"
                }
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
            {(recipeData.images && recipeData.images.length > 0) &&
            <div className='images-row'>
                 {recipeData.images.map((item) => <img src={item.imageUrl} alt='Additional image for recipe'/>) }
            </div>
            }
            {/* Transformed Comment Section from here into a separate component */}
            {recipeData.comments ? <CommentSection comments={recipeData.comments} onAdd={addComment} refreshData={() => getRecipeData()} /> : <div>none</div>}
        </div>
    )
}
