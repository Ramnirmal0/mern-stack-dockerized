import React from 'react';
import datas from '../fake_movie_list.json'

function movieList() {
     return (
        <div className="movie-list-container">
            { datas.map((res,index)=>{
                return <div className="movie-grid">
                        <div className="image-container">
                            <img src={res.image_url} alt="movie_thumbnail"></img>
                        </div>
                        <div className="title">{res.title}</div>
                        <div className="genres_rating">
                            Genre : {res.genres}<br/><br/>
                            IMdB : &#9733; {res.rating} / 5.0
                        </div>
                        <div className="director">Director : {res.director}</div>
                        <div className="production">Production : {res.production}</div>
                        <div className="btn-container">
                            <button class="watchnow">&#x27A4; Watch Now</button>
                            <button class="remove">&#x2718; Remove</button>
                        </div>
                    </div>

                
            })}
            
        </div>
    );
}

export default movieList;