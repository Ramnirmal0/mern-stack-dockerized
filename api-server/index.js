const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const PORT = 8000;

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