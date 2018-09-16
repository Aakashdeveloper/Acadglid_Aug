let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

let nav = [
    {link: '/', title: 'Home'},
    {link: '/movies', title: 'Movies'},
    {link: '/artist', title: 'Artist'}
]

let moviesRouter = require('./src/routes/moviesRoutes')(nav);
let artistRouter = require('./src/routes/ArtistRoutes')(nav);

app.use('/movies', moviesRouter);
app.use('/artist', artistRouter);

app.get('/',(req,res) => { 
    res.render('index',{
        title: 'Home Page',
        nav:nav

    })
})

app.listen(5600,function(err){
    console.log("server is running on port 5600")
})


