import React, { useState, useEffect, useCallback } from 'react'
import { motion, MotionConfig } from "motion/react"
import RecipeCard from '../components/RecipeCard';
import { useStateContext } from '../ContextProvider'
import './Search.css'
import { recipeMockData } from '../data/recipes'

function Search() {

    const [results, setResults] = useState([...recipeMockData]);
    const [search, setSearch] = useState('');
    const { token, setToken, user, setUser } = useStateContext();

    const getData = useCallback(async () => {
        const url = "http://localhost:8080/recipes/all";
        try {
            const data = await fetch("http://localhost:8080/recipes/all").then((res) => res.json());
            console.log(data);
            setResults(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    const returnResults = (e) => {
        let { value } = e.target;
        setSearch(value);
        let actualResults = results.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase()) == true);       // if user types an input in all caps or mixed capitilization, then this transforms it to check ONLY if the letters match
        if (value == '') {
            actualResults = recipeMockData;             // if there's nothing in the search bar, just return all the recipes available
        }
        setResults(actualResults);
    };

    useEffect(() => {
        getData();
    },[ getData ])

    return (
        <div className='text-cont search'>
            <h2>Find your perfect recipe</h2>
            <div>
                <input type="text" name="search" id="searchbar" placeholder='Search by title...' value={search} onChange={returnResults} />
            </div>
            <div className='filters'>
                <div>
                    <h3>Difficulty Level</h3>
                    <input type="checkbox" name="beginnerLevel" id="beginnerLevel" />
                    <label for="beginnerLevel">Beginner Level</label>
                </div>
                <div>
                    <h3>Allergies</h3>
                    <input type="checkbox" name="beginnerLevel" id="beginnerLevel" />
                    <label for="beginnerLevel">Beginner Level</label>
                </div>
            </div>
            <div className='search-bottom'>
                <div id='resultsDiv'>
                    {results.map((recipe) => <RecipeCard recipe={recipe} />)}
                </div>
            </div>
        </div>
    )
}

export default Search;
