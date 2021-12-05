import React from 'react';
import SearchBar from './searchBar';
import {Link} from 'react-router-dom'
function navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="logo" width="200px"/>
            </div>
            <SearchBar/>
            <div className="menu">
             
                  <Link to="/">Watch</Link>
                  <Link to="/add">Add Movie</Link>
                  <Link to="/profile">My Profile</Link>
               
            </div>
        </div>
    );
}

export default navbar;