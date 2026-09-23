import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router';
import { useStateContext } from '../ContextProvider'
import './css/Nav.css'

function Nav() {

    const { token, setToken, user, setUser } = useStateContext();

     useEffect(() => {
            if (token && token != "") {
                console.log("Token exists");
            }
        },[ token ]);

    return (
        <div className="navbar">
            <div>
                <Link to="/">
                    <h1>Baker's Blog</h1>
                </Link>
            </div>
            <div className="nav-links">
                <a><Link to="/">Home</Link></a>
                <a><Link to="search">Search</Link></a>
                <a><Link to="/about">About</Link></a>
                {token && user ? <Link to="/account"><button>My Account</button></Link> : <Link to="/login"><button>Sign In</button></Link>}
            </div>
        </div>
    );
}

export default Nav;
