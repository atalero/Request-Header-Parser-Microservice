var express = require('express');
var app = express();

app.get('/api/whoami', function (req,res){
  res.status(200).send('Hello World!');
});