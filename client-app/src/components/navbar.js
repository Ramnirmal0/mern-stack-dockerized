import React from 'react';
import SearchBar from './searchBar';


function navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" width="200px"/>
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