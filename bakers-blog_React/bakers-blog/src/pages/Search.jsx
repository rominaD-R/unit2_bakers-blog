import React, { useState } from 'react'
import { motion, MotionConfig } from "motion/react"
import RecipeCard from '../components/RecipeCard';
import './Search.css'
import { recipeMockData } from '../data/recipes'

function Search() {

    const [results, setResults] = useState([...recipeMockData]);
    const [search, setSearch] = useState('');

    const returnResults = (e) => {
        let { value } = e.target;
        setSearch(value);
        let actualResults = recipeMockData.filter((recipe) => recipe.title.toLowerCase().includes(search.toLowerCase()) == true);       // if user types an input in all caps or mixed capitilization, then this transforms it to check ONLY if the letters match
        if (value == '') {
            actualResults = recipeMockData;             // if there's nothing in the search bar, just return all the recipes available
        }
        setResults(actualResults);
    };

    return (
        <div className='text-cont search'>
            <h2>Find your perfect recipe</h2>
            <div>
                <input type="text" name="search" id="searchbar" placeholder='Search by title...' value={search} onChange={returnResults} />
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
