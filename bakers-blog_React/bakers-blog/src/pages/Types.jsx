import { useState } from 'react'
import { useParams, Link } from 'react-router';
import RecipeCard from '../components/RecipeCard';
import { recipeMockData } from '../data/recipes'

function Types() {

    const { tag } = useParams();
    // const [tagResults, setTagResults] = useState([...recipeMockData]);
    const tagResults = recipeMockData.filter((recipe) => recipe.tags.includes(tag) == true);

    return (
        <div className='text-cont types'>
            <h2>Results for {tag}</h2>
            <div>
                {tagResults.map((recipe) => <RecipeCard recipe={recipe} />)}
            </div>
        </div>
    )
}

export default Types;
