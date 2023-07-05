var express = require('express');
var app = express();
var dotenv = require('dotenv');
var mongo = require('mongodb');
var MongoClient = mongo.MongoClient;
dotenv.config();
var mongoUrl = "mongodb+srv://padamatigopi:gopirishi@cluster0.fgahdyv.mongodb.net/city?retryWrites=true&w=majority";
var cors = require('cors')
const bodyParser = require('body-parser')
var port = process.env.PORT || 8124;
// save the database connection
var db;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

// first default route
app.get('/',(req,res) => {
    res.send("Hiii From Express")
})


app.get('/html',(req,res) => {
    db.collection('htmls').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/javascript',(req,res) => {
    db.collection('javabb').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/node',(req,res) => {
    db.collection('nodebb').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})
app.get('/react',(req,res) => {
    db.collection('raccc').find().toArray((err, result) => {
        if(err) throw err;
        res.send(result)
    })
})


MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('city');
    app.listen(port,()=>{
        console.log(`listening on port ${port}`)
    })
})

//mongodb+srv://padamatigopi:gopirishi@cluster0.fgahdyv.mongodb.net/city?retryWrites=true&w=majority









////https://moviesite-production.up.railway.app/movies
///https://moviesite-production.up.railway.app/review
////https://moviesite-production.up.railway.app/menu
//https://moviesite-production.up.railway.app/review/3
/*
app.get('/cart',(req,res) => {
    db.collection('eshoping').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})
*/

