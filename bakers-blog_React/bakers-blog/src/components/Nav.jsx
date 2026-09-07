import { useState } from "react";
import { Routes, Route, Link } from 'react-router';
import './css/Nav.css'

function Nav() {

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
            {/* <a><Link to="/types">Types</Link></a> */}
            <a><Link to="/about">About</Link></a>
        </div>
    </div>
 );
}

export default Nav;
