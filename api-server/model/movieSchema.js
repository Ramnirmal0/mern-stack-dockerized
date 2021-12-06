const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title:{type:String , required:true},
    rating:{type:Number , required:true},
    production:{type:String , required:true},
    image_url:{type:String , required:true},
    genres:{type:String , required:true},
    director:{type:String , required:true},
})

module.exports=mongoose.model('movie',movieSchema);