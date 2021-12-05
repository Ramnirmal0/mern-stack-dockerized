import React, { useContext, useEffect } from 'react';
import { Datacontext } from '../context/dataProvider';
import fakeData from '../fake_movie_list.json'
import axios from 'axios'

function MovieList() {
    const [datas,setDatas]= useContext(Datacontext)

    useEffect(()=>{
        
        axios.get('http://localhost:8000/getdata')
        .then(res=>{
            console.log(res.data);
            setDatas(res.data);
        })
        .catch(err=>console.log(err))
    },[])
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

export default MovieList;