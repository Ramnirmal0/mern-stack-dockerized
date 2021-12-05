import React from 'react';
import SearchBar from './searchBar';


function navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/MX_Player_Logo.png" alt="logo" width="200px"/>
            </div>
            <SearchBar/>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">Add Movie</a>
                <a href="#">Sign up/in</a>
            </div>
        </div>
    );
}

export default navbar;