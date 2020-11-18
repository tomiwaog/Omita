var express = require('express');
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;
var HOST = process.env.HOST || '0.0.0.0';
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname+'/public'));
app.get('/', function(req,res){
    res.render('index');
})

app.use('/service/botmessenger', require('./routers/messenger'));

app.listen(PORT, HOST,()=>{
    console.log("Node is now running via "+ "http://"+HOST+":"+PORT);
});