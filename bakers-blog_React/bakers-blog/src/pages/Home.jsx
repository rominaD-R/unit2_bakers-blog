import React, { useState, useEffect, useCallback } from 'react';
import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';
import { recipeMockData } from '../data/recipes'

function Home() {

    const allTime = recipeMockData.slice(0, 4);         // All time Favorites Recipes which are the first 4 of the original list
    const heck = recipeMockData.slice(4, 8);      // "New" Recipes which are the last 4 of the original list

    const [recipeData, setRecipeData] = useState([]);
    const [newRecipes, setNewRecipes] = useState([]);

    const getData = useCallback(async () => {
        const url = "http://localhost:8080/recipes/all";
        try {
            // const result = await response.json();
            // console.log(result);
            // setRecipeData(result);   
            const data = await fetch("http://localhost:8080/recipes/all").then((res) => res.json());
            console.log(data);
            setRecipeData(Array.isArray(data) ? data : []);
            
            if (Array.isArray(data)) {
                let reversedArray = [...data];
                reversedArray = reversedArray.reverse();
                setNewRecipes(reversedArray);
            } else {
                setNewRecipes(data);
            }
        } catch (error) {
            console.error(error.message);
        }
        }, []);

    const testUrl = async () => {
        const url = "http://localhost:8080/recipes/all";
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            setRecipeData(result);
            let reversedArray = result.reverse();
            setNewRecipes(reversedArray);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getData();
    },[ getData ])

    // getData();
    console.log(recipeData);

    return (
        <div>
            <FeaturedHero />
            <div className='text-cont'>
                <CardsRow heading={"All Time Favorites"} list={recipeData} />
                <CardsRow heading={"New Recipes"} list={newRecipes} />
            </div>
        </div>
    )
}

export default Home;
