import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router';
import { useStateContext } from '../ContextProvider'
import { Navigate, useNavigate } from 'react-router-dom';

export default function LogSignIn() {

    const [login, setLogin] = useState(true);
    const [token2, setToken2] = useState("");
    const { setToken, token } = useStateContext();

    const navigate = useNavigate();

    let loginToken;

    // Sign Up for account
    const makeAccount = async (e) => {
        e.preventDefault();
        const fName = document.getElementById("fName").value;
        const lName = document.getElementById("lName").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Sign up clicked!");
        try {
            await fetch("http://localhost:8080/users", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    fName: fName,
                    lName: lName,
                    email: email,
                    role: "basic",
                    username: username,
                    password: password
                }),
            });
        } catch (error) {
            console.error(error.message);
            console.log("ERROR!!")
        }
        e.preventDefault();
    }

    const loginUser = async (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Login clicked!!")
        try {
            await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    username: username,
                    password: password
                }),
            }).then(res => res.json())
            .then(data => {
                console.log(data.accessToken.token);
                setToken(data.accessToken.token);
            })
            // .then(data => console.log(data.accessToken.token))
        } catch(error) {
            console.error(error.message);
            console.log("ERROR!!");
        }
        console.log(token);
    }

    // Navigate to Account page after user successfully logs in
    useEffect(() => {
        if (token && token != "") {
            navigate('/account');
        }
    }, [token, navigate]);

    return (
        <div className='text-cont'>
            {login ? <div>
                <h4>Log In</h4>
                <form>
                    <label htmlFor="">Username: </label>
                    <input id='username' type="text" />
                    <label htmlFor="">Password: </label>
                    <input id='password' type="password" />
                    <button onClick={loginUser}>Login</button>
                </form>
            </div> : <div>
                <h4>Sign Up for an Account</h4>
                <form>
                    <label htmlFor="">First Name: </label>
                    <input id='fName' type="text" />
                    <label htmlFor="">Last Name: </label>
                    <input id='lName' type="text" />
                    <label htmlFor="">Email: </label>
                    <input id='email' type="email" />
                    <label htmlFor="">Username: </label>
                    <input id='username' type="text" />
                    <label htmlFor="">Password: </label>
                    <input id='password' type="password" />
                    <button id='signUpButton' onClick={makeAccount}>Create Account</button>
                </form>
                </div>}
            <button onClick={() => setLogin(!login)}>{login ? "No account? Sign up here!" : "Have an account? Log in"}</button>
        </div>
    )
}
