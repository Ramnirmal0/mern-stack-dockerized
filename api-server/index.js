const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors=require('cors');
const PORT = process.env.PORT || 8000;
const fakeData = [{"id":{"$oid":"61aca312fc13ae32b4000000"},"title":"Dead Meat","genres":"Horror","rating":3.0,"director":"Mari Fowls","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Predovic-Emmerich"},
{"id":{"$oid":"61aca312fc13ae32b4000001"},"title":"I'm Going Home (Je rentre à la maison)","genres":"Comedy|Drama","rating":3.6,"director":"Cherie Abramowitch","image_url":"http://dummyimage.com/350x250.png/dddddd/000000","production":"Wehner, Gaylord and Crooks"},
{"id":{"$oid":"61aca312fc13ae32b4000002"},"title":"Incredible Hulk, The","genres":"Action|Sci-Fi","rating":4.5,"director":"Guthry Groome","image_url":"http://dummyimage.com/350x250.png/dddddd/000000","production":"White, Brakus and Kohler"},
{"id":{"$oid":"61aca312fc13ae32b4000003"},"title":"Knightriders","genres":"Action|Adventure|Drama","rating":3.7,"director":"Lesya Ommanney","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Glover Inc"},
{"id":{"$oid":"61aca312fc13ae32b4000004"},"title":"Kid for Two Farthings, A","genres":"Children|Comedy|Drama|Fantasy","rating":4.9,"director":"Adelaide Brimilcombe","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Bogan-Price"},
{"id":{"$oid":"61aca312fc13ae32b4000005"},"title":"Punk in London","genres":"Documentary|Musical","rating":2.1,"director":"Margarita Deaconson","image_url":"http://dummyimage.com/350x250.png/cc0000/ffffff","production":"Jast-Cassin"},
{"id":{"$oid":"61aca312fc13ae32b4000006"},"title":"Shrek Forever After (a.k.a. Shrek: The Final Chapter)","genres":"Adventure|Animation|Children|Comedy|Fantasy|IMAX","rating":4.5,"director":"Riccardo Trotton","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Lesch, Corwin and Halvorson"},
{"id":{"$oid":"61aca312fc13ae32b4000007"},"title":"Fanny","genres":"Drama","rating":3.1,"director":"Gradeigh Leakner","image_url":"http://dummyimage.com/350x250.png/cc0000/ffffff","production":"Osinski-Rutherford"},
{"id":{"$oid":"61aca312fc13ae32b4000008"},"title":"Rebel, The (Le Rebelle)","genres":"Drama","rating":4.5,"director":"Georgeanna Crier","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Barton-Leuschke"},
{"id":{"$oid":"61aca312fc13ae32b4000009"},"title":"Pale Rider","genres":"Western","rating":3.2,"director":"Caro Diggons","image_url":"http://dummyimage.com/350x250.png/cc0000/ffffff","production":"Shanahan, Predovic and Boehm"},
{"id":{"$oid":"61aca312fc13ae32b400000a"},"title":"Rosso","genres":"Crime|Drama","rating":4.6,"director":"Nilson Greystoke","image_url":"http://dummyimage.com/350x250.png/dddddd/000000","production":"Becker Group"},
{"id":{"$oid":"61aca312fc13ae32b400000b"},"title":"Taste of Others, The (Le goût des autres)","genres":"Comedy|Drama|Romance","rating":2.6,"director":"Alysia Rowlatt","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Schoen-Hickle"},
{"id":{"$oid":"61aca312fc13ae32b400000c"},"title":"Lola and Billy the Kid (Lola + Bilidikid)","genres":"Drama","rating":4.3,"director":"Tamra Meneghi","image_url":"http://dummyimage.com/350x250.png/5fa2dd/ffffff","production":"Bins Inc"},
{"id":{"$oid":"61aca312fc13ae32b400000d"},"title":"Jesse James","genres":"Action|Crime|Drama|Romance|Western","rating":2.5,"director":"Inglebert Rolling","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Jacobi, Kemmer and Schuppe"},
{"id":{"$oid":"61aca312fc13ae32b400000e"},"title":"Lake Mungo","genres":"Drama|Mystery|Thriller","rating":2.4,"director":"Irv Raybould","image_url":"http://dummyimage.com/350x250.png/cc0000/ffffff","production":"Waelchi-Reinger"},
{"id":{"$oid":"61aca312fc13ae32b400000f"},"title":"Spiders, Part 2: The Diamond Ship, The (Die Spinnen, 2. Teil - Das Brillantenschiff)","genres":"Action|Adventure|Drama","rating":4.7,"director":"Verena Trelevan","image_url":"http://dummyimage.com/350x250.png/5fa2dd/ffffff","production":"Spencer-Funk"},
{"id":{"$oid":"61aca312fc13ae32b4000010"},"title":"Dragon Fist (Long quan)","genres":"Action|Drama","rating":2.9,"director":"Der McCullagh","image_url":"http://dummyimage.com/350x250.png/dddddd/000000","production":"O'Connell-Larson"},
{"id":{"$oid":"61aca312fc13ae32b4000011"},"title":"Dream Team, The","genres":"Comedy","rating":3.4,"director":"Gabby Seawell","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Macejkovic Group"},
{"id":{"$oid":"61aca312fc13ae32b4000012"},"title":"Sniper 2","genres":"Action|Adventure|War","rating":2.3,"director":"Isabel Silk","image_url":"http://dummyimage.com/350x250.png/ff4444/ffffff","production":"Haley Inc"},
{"id":{"$oid":"61aca312fc13ae32b4000013"},"title":"Kidnapping, Caucasian Style (Kavkazskaya plennitsa)","genres":"Comedy|Romance","rating":2.9,"director":"Angelico Rubi","image_url":"http://dummyimage.com/350x250.png/5fa2dd/ffffff","production":"Wilkinson-Denesik"}]


app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

// app.use(database , ()=>{})
app.get('/',(req,res)=>{
    res.send('server is running')
})

app.get('/getdata',(req,res)=>{
    res.send(fakeData)
})

app.listen(PORT , (err,res)=>{
    if(err){
        throw new Error
    }
    else{
        console.log("Server is live on http://localhost:"+PORT);
    }
})