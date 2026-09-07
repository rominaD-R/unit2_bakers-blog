import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router';

export default function LogSignIn() {

    return (
        <div className='text-cont'>
            <div>
                <h4>Log In</h4>
                <form>
                    <label htmlFor="">Username: </label>
                    <input id='username' type="text" />
                    <label htmlFor="">Password: </label>
                    <input id='password' type="password" />
                    <input type="submit" value="Log In" />
                </form>
            </div>
        </div>
    )
}
