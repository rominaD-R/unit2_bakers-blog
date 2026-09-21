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

    const beginnerCheckbox = document.getElementById('beginnerLevel');
    const advancedCheckbox = document.getElementById('advancedLevel');
    const glutenCheckbox = document.getElementById('glutenFree');
    const dairyCheckbox = document.getElementById('dairyFree');
    const nutCheckbox = document.getElementById('nutFree');
    const treenutCheckbox = document.getElementById('treeNutFree');
    const veganCheckbox = document.getElementById('vegan');

    const baseUrl = location.href.replace(location.search, '');
    const searchUrl = 'localhost:8080/recipes/filter'

    const updateUrl = () => {
        if (!(beginnerCheckbox.checked || advancedCheckbox.checked || glutenCheckbox.value || dairyCheckbox.value || nutCheckbox.value || treenutCheckbox.value || veganCheckbox.value)) {
            return baseUrl;
        }

        let newUrl = new URL(`${baseUrl}?`);
        beginnerCheckbox.checked && newUrl.searchParams.append('level', 'beginner');
        advancedCheckbox.checked && newUrl.searchParams.append('level', 'advanced');
        glutenCheckbox.checked && newUrl.searchParams.append('allergy', 'gluten');
        dairyCheckbox.checked && newUrl.searchParams.append('allergy', 'dairy');
        nutCheckbox.checked && newUrl.searchParams.append('allergy', 'nut');
        treenutCheckbox.checked && newUrl.searchParams.append('allergy', 'treenut');
        veganCheckbox.checked && newUrl.searchParams.append('allergy', 'vegan');
        history.pushState({}, '', newUrl.toString());
    }

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
            <div className='results'>
                <div className='filters'>
                <div>
                    <h3>Difficulty Level</h3>
                    <label for="beginnerLevel">
                        <input onChange={updateUrl} type="checkbox" name="beginnerLevel" id="beginnerLevel" />
                        Beginner Level
                    </label>
                    <label for="advancedLevel">
                        <input onChange={updateUrl} type="checkbox" name="advancedLevel" id="advancedLevel" />
                        Advanced Level
                    </label>
                </div>
                <div id='allergyFilter'>
                    <h3>Allergies</h3>
                    <label for="glutenFree">
                        <input onChange={updateUrl} type="checkbox" name="glutenFree" id="glutenFree" />
                        Gluten-Free
                    </label>
                    <label for="dairyFree">
                        <input onChange={updateUrl} type="checkbox" name="dairyFree" id="dairyFree" />
                        Dairy Free
                    </label>
                    <label for="nutFree">
                        <input onChange={updateUrl} type="checkbox" name="nutFree" id="nutFree" />
                        Nut Free
                    </label>
                    <label for="treeNutFree">
                        <input onChange={updateUrl} type="checkbox" name="treeNutFree" id="treeNutFree" />
                        Tree Nut Free
                    </label>
                    <label for="vegan">
                        <input onChange={updateUrl} type="checkbox" name="vegan" id="vegan" />
                        Vegan
                    </label>
                </div>
            </div>
            <div className='search-bottom'>
                <div id='resultsDiv'>
                    {results.map((recipe) => <RecipeCard recipe={recipe} />)}
                </div>
            </div>
            </div>
        </div>
    )
}

export default Search;
