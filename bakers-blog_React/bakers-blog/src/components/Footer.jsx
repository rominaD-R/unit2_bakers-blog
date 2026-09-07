import { useState } from "react";
import { Routes, Route, Link } from 'react-router';
import ContactButton from "./ContactButton";
import './css/Footer.css'

function Footer() {

 return (
    <div className="footer">
        <div className="footer-cont">
            <div>
                <p>This site was created by Rome Diaz-Rivero</p>
                <p>LaunchCode 2026</p>
            </div>
            <div className="footer-links">
                <a><Link to="/">Home</Link></a>
                <a><Link to="search">Search</Link></a>
                {/* <a><Link to="/types">Types</Link></a> */}
                <a><Link to="/about">About</Link></a>
                <ContactButton />
            </div>
        </div>
    </div>
 );
}

export default Footer;
