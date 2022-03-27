//Ne pas oublier de faire npm install et npm start si tu veux tester :)
const express = require('express'); 
const app = express(); 
const PORT = 8000 
const cookieParser = require("cookie-parser");
const crypto = require('crypto');

const tokens = [];
const users = [];

app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/css'));

app.get('/', function(req, res){
    const token = req.cookies.info_user_cookie;
    const user = tokens.find((user)=>user.token === token);

    if(token == undefined || user === undefined) {
        res.redirect('/login'); 
    } else {
        res.render('userprofile', {username:user.username});
    }
});

app.get('/userprofile', (req, res) => {
    const token = req.cookies.info_user_cookie;
    const user = tokens.find((user)=>user.token === token);

    if(token == undefined || user === undefined) {
        res.redirect('/login'); 
    } else {
        res.render('userprofile', {username:user.username});
    }
});

app.get('/register', function(req, res){
    res.render('register');
});

app.post('/users', (req, res) => {
    const user = users.find((user) => user.username === req.body.username)
    if(user === undefined){
        users.push({'username':req.body.username, "password":req.body.password});
        res.sendStatus(200);
    } else {
        res.sendStatus(406)
    }
});

app.get ('/login', (req, res) =>{
    res.render('login'); 
});

app.post('/login', (req, res) => {
    const user = users.find((user) => user.username === req.body.username && user.password === req.body.password)
    if(user === undefined) {
        res.sendStatus(401)
    } else {
        const token = crypto.randomUUID(); 
        tokens.push({username: user.username, token});
        res.send({token});
    }
});

app.listen(PORT, error =>{ 
    if(error) {
        console.log(error)
    }else{
        console.log('Server listening as localhost:', PORT);
    }
});