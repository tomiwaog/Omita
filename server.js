var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080;
var HOST = '0.0.0.0';

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname+'/public'));
app.get('/', function(req,res){
    res.render('index');
})

app.listen(PORT, HOST,()=>{
    console.log("Node is now running via "+ "http://"+HOST+":"+PORT);
});