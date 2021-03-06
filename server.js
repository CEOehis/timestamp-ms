var express = require('express');
var app = express();
var parser = require('./app/parser');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');

app.get('/', function(req, res) {
  var projectUrl = req.protocol + '://' + req.get('host');
  res.render('index', {title: 'Timestamp Microservice', projectUrl: projectUrl})
})

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
});

var port = process.env.PORT || 3000;

app.listen(port, function(err) {
  if(err) throw err;
  console.log('listening on port ', port);
});