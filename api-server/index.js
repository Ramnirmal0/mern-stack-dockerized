const express= require('express');
const app = express();

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/movies'

mongoose.connect(url,{useNewUrlParser:true , useUnifiedTopology: true})

const con = mongoose.connection

con.on('open',()=>{ console.log("mongodb is connected");})

const router = require('./routes/router');

app.use(express.json())

app.use('/movies',router);

app.listen('8000',(err,res)=>{
    if(err){ console.log(err)}
    if(res){console.log("Server is live in http://localhost:8000" );}
})