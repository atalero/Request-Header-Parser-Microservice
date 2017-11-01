/*
User Story: I can get the IP address, language and operating system for my browser.
*/
var express = require('express');
var app = express();
//var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.send('Welcome to the website');
  console.log(request.headers);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
