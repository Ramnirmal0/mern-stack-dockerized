const express = require('express')
const router= express.Router();

const movieModel =require('../model/movieSchema');

router.get('/',async(req,res)=>{
    try{
        const movies = await movieModel.find()
        res.json(movies)

    }catch(err){
        res.send(err)
    }
})

router.post('/',async(req,res)=>{
    const movie = new movieModel({
        title:req.body.title,
        rating:req.body.rating,
        production:req.body.production,
        image_url:req.body.image_url,
        genres:req.body.genres,
        director:req.body.director

    })
    try{
        const temp = await movie.save();
        res.json(temp)
        
    }catch{

    }
})

module.exports = router;