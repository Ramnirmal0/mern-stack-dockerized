const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const PORT = process.env.PORT || 8000;
const database = require('./database');


app.use(bodyParser.json())

// app.use(database , ()=>{})

app.get('/',(req,res)=>{
    res.send("server is active")
})

app.listen(PORT , (err,res)=>{
    if(err){
        throw new Error
    }
    else{
        console.log("Server is live on http://localhost:"+PORT);
    }
})