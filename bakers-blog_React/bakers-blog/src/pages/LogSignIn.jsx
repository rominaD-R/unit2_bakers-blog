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
            if ((username.trim() == '') || (password.trim() == '') || (fName.trim() == '') || (lName.trim() == '') || (email.trim() == '')) {
                throw Error;
            } 
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
            console.log("ERROR!!");
            // Error feedback for signing up/making account
            if ((username.trim() != '') && (password.trim() != '') && (fName.trim() != '') && (lName.trim() != '') && (email.trim() != '')) {
                let loginError = document.createElement("p");
                loginError.textContent = "Error with server receiving data. Please try again later.";
                document.getElementById("signupForm").appendChild(loginError);
            } else {
                if (fName.trim() == '') {
                    let errorMessage = document.getElementById("firstnameError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Please enter your first name";
                }
                if (lName.trim() == '') {
                    let errorMessage = document.getElementById("lastnameError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Please enter your last name";
                }
                if (username.trim() == '') {
                    let errorMessage = document.getElementById("usernameError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Please enter a username";
                }
                if (password.trim() == '') {
                    let errorMessage = document.getElementById("passwordError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Please enter a password";
                }
                if (email.trim() == '') {
                    let errorMessage = document.getElementById("emailError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Please enter an email";
                }
            }
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
            // Error feedback for logging in
            if ((username.trim() != '') && (password.trim() != '')) {
                let loginError = document.createElement("p");
                loginError.textContent = "Error with login credentials. Please try again";
                document.getElementById("loginForm").appendChild(loginError);
            } else {
                if (username.trim() == '') {
                    let errorMessage = document.getElementById("usernameError");
                    errorMessage.textContent = "";
                    errorMessage.style.display = "block";
                    errorMessage.textContent = "Username is required to login";
                }
                if (password.trim() == '') {
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
            </div> : 
            <div className='signup-div'>
                <h4>Sign Up for an Account</h4>
                <form id='signupForm'>
                    <label htmlFor="fName">First Name: </label>
                    <input required id='fName' type="text" />
                    <span id='firstnameError'></span>
                    <label htmlFor="lName">Last Name: </label>
                    <input required id='lName' type="text" />
                    <span id='lastnameError'></span>
                    <label htmlFor="email">Email: </label>
                    <input required id='email' type="email" />
                    <span id='emailError'></span>
                    <label htmlFor="username">Username: </label>
                    <input required id='username' type="text" />
                    <span id='usernameError'></span>
                    <label htmlFor="password">Password: </label>
                    <input required id='password' type="password" />
                    <span id='passwordError'></span>
                    <button id='signUpButton' onClick={makeAccount}>Create Account</button>
                </form>
                </div>}
            <button className='log-sign-btn' onClick={() => setLogin(!login)}>{login ? "No account? Sign up here!" : "Have an account? Log in"}</button>
        </div>
    )
}
