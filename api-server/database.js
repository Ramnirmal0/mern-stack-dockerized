const mongoose = require('mongoose')

var mongoDB = 'mongodb://localhost/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


var db = mongoose.connection;

db.once('open',()=>{
    console.log("MongoDB Connection Established")
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

