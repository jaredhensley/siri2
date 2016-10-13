console.log('hello');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 3000;

app.use(cors());
app.use(express.static('public'));


var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

app.get('/user', function(req, res, next) {
  res.status(200).json(messages[0]);
});

app.listen(port, function () {
  console.log('listening on port', 3000);
});
