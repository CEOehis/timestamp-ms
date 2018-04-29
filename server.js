var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  app.send('index.html')
});

app.listen(3000, function(err) {
  if(err) throw err;
  console.log('listening on port 3000');
});