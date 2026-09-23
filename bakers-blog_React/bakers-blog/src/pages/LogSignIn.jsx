import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router';
import { useStateContext } from '../ContextProvider'
import { Navigate, useNavigate } from 'react-router-dom';
import './LogSignIn.css'

export default function LogSignIn() {

    const [login, setLogin] = useState(true);
    const { setToken, token } = useStateContext();

    const navigate = useNavigate();

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

    // Function that authenticates user with the backend to see if they can log in
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
        } catch(error) {
            console.error(error.message);
            console.log("ERROR!!");
            if ((username.trim() != '') && (password.trim() != '')) {
                let loginError = document.createElement("p");
                loginError.textContent = "Error with login credentials. Please try again";
                document.getElementById("loginForm").appendChild(loginError);
            } else {
                if (username.trim() == '') {
                    console.log("NO USERNAME")
                    let errorMessage = document.getElementById("usernameError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Username is required to login";
                }
                if (password.trim() == '') {
                    console.log("NO USERNAME")
                    let errorMessage = document.getElementById("passwordError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Password is required to login";
                }
            }
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
        <div className='text-cont login'>
            {login ? <div className='login-div'>
                <h4>Log In</h4>
                <form id='loginForm'>
                    <label htmlFor="username">Username: </label>
                    <input required id='username' type="text" />
                    <span id='usernameError'></span>
                    <label htmlFor="password">Password: </label>
                    <input required id='password' type="password" />
                    <span id='passwordError'></span>
                    <button onClick={loginUser}>Login</button>
                </form>
            </div> : <div className='signup-div'>
                <h4>Sign Up for an Account</h4>
                <form>
                    <label htmlFor="fName">First Name: </label>
                    <input required id='fName' type="text" />
                    <label htmlFor="lName">Last Name: </label>
                    <input required id='lName' type="text" />
                    <label htmlFor="email">Email: </label>
                    <input required id='email' type="email" />
                    <label htmlFor="username">Username: </label>
                    <input required id='username' type="text" />
                    <label htmlFor="password">Password: </label>
                    <input required id='password' type="password" />
                    <button id='signUpButton' onClick={makeAccount}>Create Account</button>
                </form>
                </div>}
            <button className='log-sign-btn' onClick={() => setLogin(!login)}>{login ? "No account? Sign up here!" : "Have an account? Log in"}</button>
        </div>
    )
}
