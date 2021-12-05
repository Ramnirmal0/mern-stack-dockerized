import React from 'react';

function searchBar() {
    return (
        <div className="search">
          <div className="searchbar">
              <div className="search-icon">&#x26B2;</div>
              <input type="search" placeholder="Search by actor , title , genres ..." ></input>
              <div className="filter">&#x268E;</div>            
            </div>  
        </div>
    );
}

export default searchBar;