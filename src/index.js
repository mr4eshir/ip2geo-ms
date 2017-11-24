var express = require('express');

var app = express();

app.get('/ip2geo', function(req, res) {
  res.send({ip: req.query.ip,
  lon: '0.0',
  lat: '0.0',
  city: 'Moscow',
  country: 'Russia'});
});
app.get('/', function(req, res) {
  res.redirect('/ip2geo');
});
app.listen(3000);
