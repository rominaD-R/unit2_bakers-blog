import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router';

export default function LogSignIn() {

    const [login, setLogin] = useState(true);

    // Sign Up for account (WORK ON HASHING)
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

    return (
        <div className='text-cont'>
            {login ? <div>
                <h4>Log In</h4>
                <form>
                    <label htmlFor="">Username: </label>
                    <input id='username' type="text" />
                    <label htmlFor="">Password: </label>
                    <input id='password' type="password" />
                    <input type="submit" value="Log In" />
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
