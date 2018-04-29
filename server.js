var express = require('express');
var app = express();
var parser = require('./app/parser');

app.use(express.static(__dirname + '/public'));

app.get('/api/timeservice/:time', function (req, res) {
  var timeService;
  if (req.method == 'GET') {
    var stringParam = req.params.time;
    if(!isNaN(Number(stringParam))) {
      timeService = parser.parseUnixTime(Number(stringParam));
    }
    else {
      timeService = parser.parseIsoTime(stringParam);
    }
    return res.send((timeService));
  }
  return res.send('unable to handle that request');
});

// redirect other routes to index page for instructions
app.get('*', function(req, res) {
  res.redirect('/')
})

app.listen(3000, function(err) {
  if(err) throw err;
  console.log('listening on port 3000');
});