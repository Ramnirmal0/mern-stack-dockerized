import React, { useState } from 'react';

function AddNewMovie() {
    const [postData,setPostData] = useState({   url:'',title:'',genre:'Drama',rating:1.0, director:'',production:''});
    return (
        <div className="add-movie-container">
        <form>
            <div className="form-col">
            <label>Image_URL :</label>  <input type="text" value={postData.url} onInput={e=>setPostData({...postData,url: e.target.value})} name="url" placeholder="copy the link to image 350 x 250 px only" ></input> <br/>
            </div>

            <div className="form-col">
            <label>Movie Title :</label>  <input type="text" value={postData.title} onInput={e=>setPostData({...postData,title: e.target.value})} name="title" placeholder="Movie name"></input> <br/>
            </div>

            <div className="form-col">
            <label>Genre : </label>
            <select value={postData.genre} onChange={e=>setPostData({...postData,genre: e.target.value})}>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller">Thriller</option>
                <option value="Horror">Horror</option>
                <option value="Love">Love</option>
                <option value="Sex">Sex</option>
                <option value="Comics">Comics</option>
                <option value="Family">Family</option>
                <option value="Mystery">Mystery</option>
                <option value="Animation">Animation</option>
            </select> <br/>
            </div>

            <div className="form-col">
            <label>IMDb rating :</label> <input type="number"  value={postData.rating} onInput={e=>setPostData({...postData,rating: e.target.value})}name="rating" min="1" max="5" step="0.5" placeholder="1.0"></input> <br/>
            </div>

            <div className="form-col">
            <label>Director :</label> <input type="text" value={postData.director} onInput={e=>setPostData({...postData,director: e.target.value})} name="director" placeholder="Director name"></input> <br/>
            </div>

            <div className="form-col">
            <label>Production :</label> <input type="text" value={postData.production} onInput={e=>setPostData({...postData,production: e.target.value})} name="production" placeholder="Production house"></input> <br/>
            </div>

            <div className="form-col">
            <button className="submit" >Add new Movie</button>
            <button className="reset" type="submit">Reset</button>
            </div>
        </form>
        </div>
    );
}

export default AddNewMovie;