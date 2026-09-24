import React, { useState, useEffect, useCallback } from 'react';
import FeaturedHero from '../components/FeaturedHero';
import CardsRow from '../components/CardsRow';
import { recipeMockData } from '../data/recipes'

function Home() {

    const [recipeData, setRecipeData] = useState([]);
    const [newRecipes, setNewRecipes] = useState([]);

    const getData = useCallback(async () => {
        const url = "http://localhost:8080/recipes/all";
        try {
            const data = await fetch("http://localhost:8080/recipes/all").then((res) => res.json());
            console.log(data);
            setRecipeData(Array.isArray(data) ? data.slice(0, 4) : []);
            
            if (Array.isArray(data)) {
                let reversedArray = [...data];
                reversedArray = reversedArray.reverse();
                setNewRecipes(reversedArray.slice(0, 4));
            } else {
                setNewRecipes(data);
            }
        } catch (error) {
            console.error(error.message);
        }
        }, []);

    useEffect(() => {
        getData();
    },[ getData ])

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
