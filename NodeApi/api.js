const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 7800;
var db ;
var dbmovies;
var url = "mongodb://localhost:27017";

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

MongoClient.connect(url, (err,client) => {
    if(err) return console.log(err);
    db = client.db('acadgild_aug');
    dbmovies = client.db('books')

    app.listen(port, (err) => {
        console.log('server running on port '+ port)
    })
})

app.get('/', (req,res)=>{
    db.collection('books').find().toArray((err, result) => {
        if(err) return console.log(err)
        res.json(result)
    })
})

app.get('/detail',(req,res) => {
    var query = {}
    if(req.query.rate){
        query.rate = req.query.rate
        query= {"rate":parseFloat(query.rate)}
    }else{
        query = req.query
    }
    console.log(query)
    db.collection('books').find(query).toArray((err, result) => {
        if(err) return console.log(err)
        res.json(result)
    })

    
})

app.post('/addMovies',(req,res)=> {
    console.log(">>>>>"+JSON.stringify(req.body))
    db.collection('books').insert(req.body, (err, result) => {
        if(err) return console.log(err)
        res.send("data added")
    })
})

app.get('/first', (req,res)=>{
    db.collection('books').find().toArray((err, result) => {
        if(err) return console.log(err)
        res.json(result)
    })
})
