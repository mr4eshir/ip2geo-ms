// import { decoder } from './decoders/abstract';
import { decoder } from './decoders/freegeoip';
let express = require('express');

let app = express();

app.get('/ip2geo', function(req, res) {
  let Memcached = require('memcached');
  let memcached = new Memcached('memcache');
  let cacheTime = 30*60; // Keep cache for 30 minutes

  let cachedData = memcached.get(req.query.ip, function(err, data) {
    console.log('cached data');
    if ('undefined' == typeof data) {
      return;
    }
    console.log('Got cached');
    let jsoned = JSON.parse(data);
    jsoned.cached = true;
    console.log(jsoned);
    res.jsonp(jsoned);
  });

  let data = decoder.translate(req.query.ip);
  data.then((resolve) => {
    console.log(resolve);
    memcached.set(req.query.ip, JSON.stringify(resolve), cacheTime, function(err) {
      console.log(err);
    });
    res.jsonp(resolve);
  })
  .catch((reject) => {
    res.status(404).jsonp(reject)
  });
});
app.get('/', function(req, res) {
  res.redirect('/ip2geo');
});
app.listen(3000);
