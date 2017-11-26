// import { decoder } from './decoders/abstract';
import { decoder } from './decoders/freegeoip';
let express = require('express');

let app = express();

app.get('/ip2geo', function(req, res) {
  let data = decoder.translate(req.query.ip);
  console.log(data);
  data.then((resolve) => {
    console.log(resolve);
    res.send(resolve);
  })
  .catch((reject) => {
    console.log(reject);
    res.send(reject)
  });
});
app.get('/', function(req, res) {
  res.redirect('/ip2geo');
});
app.listen(3000);
