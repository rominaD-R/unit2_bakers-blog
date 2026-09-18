import React, { useState, useEffect, useCallback } from 'react'
import { useStateContext } from '../ContextProvider';
import RecipeCard from '../components/RecipeCard';
import CardsRow from '../components/CardsRow';

export default function Account() {

    // const [token, setToken] = useState("");
    const { token, setToken, user, setUser } = useStateContext();

    const getAccountInfo = useCallback(async () => {
        console.log("Fetching account info:  ");
        console.log(`Token is:  ` + token);
        try {
            await fetch("http://localhost:8080/users/current", {
                method: "GET",
                headers: { 
                    'Authorization': `Bearer ${token}`
                },
            }).then(res => res.json())
            .then(data => setUser(data))
        } catch (error) {
            console.error(error.message);
            console.log("ERROR!!")
        }
    }, []);

    useEffect(() => {
        getAccountInfo()
    }, [ getAccountInfo ]);

    return (
        <div className='text-cont'>
            {token && user ?
                <div>
                    <h1>Hello, {user.username}!</h1>
                    {user.savedRecipes ? 
                        <div>
                            <h3>Saved Recipes</h3>
                            {user.savedRecipes.map((recipe) => <RecipeCard recipe={recipe} />)}
                        </div>
                        :
                        <div></div>
                    }
                    <div>
                        <h3>Your comments</h3>
                    </div>
                    <button onClick={() => setToken(null)}>Log Out</button>
                </div>
                :
                <div>
                    <p>Please sign in or create an account to view your saved recipes and comments. </p>
                    <button onClick={() => setToken(null)}>Log In</button>
                </div>
            }
        </div>
    )
}
