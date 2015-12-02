var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.post( "/get", function(req, res) {
  console.log(req.body.data);
});

app.listen(9090, function(){
  console.log("listening to http://localhost:9090");
});