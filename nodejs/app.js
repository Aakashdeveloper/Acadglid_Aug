let express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs')

let nav = [
    {link: '/', title: 'Home'},
    {link: '/movies', title: 'Movies'},
    {link: '/admin', title: 'Admin'}
]

app.get('/',(req,res) => { 
    res.render('index',{
        title: 'Home Page',
        nav:nav

    })
})

app.get('/movies', (req,res) => {
    res.render('movies',{
        title: 'Movies Page',
        nav
    })
})

app.listen(5600,function(err){
    console.log("server is running on port 5600")
})


