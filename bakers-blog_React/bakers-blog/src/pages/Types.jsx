import { useState, useEffect, useCallback } from 'react'
import { useParams, Link } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import { useStateContext } from '../ContextProvider'

function Types() {

    const { tag } = useParams();
    const [recipes, setRecipes] = useState([]);

    const fetchResults = useCallback(async () => {
        const url = `http://localhost:8080/tags/tag/${tag}/recipes`;
        console.log(url);
        try {
            const data = await fetch(url).then((res) => res.json());
            console.log(data);
            setRecipes(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error(error.message);
        }
        }, [tag, setRecipes]);

    useEffect(() => {
        fetchResults();
    },[ fetchResults ])
    

    return (
        <div className='text-cont types'>
            <h2>Results for {tag}</h2>
            <div>
                {recipes && recipes.map((recipe) => <RecipeCard recipe={recipe} />)}
            </div>
        </div>
    )
}

export default Types;
