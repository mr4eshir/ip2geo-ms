let axios=require('axios');
import { decoder } from './abstract';
decoder.translate = function(ip) {
  let data = axios.get('http://freegeoip.net/json/'+ip);
  return data.then(function(res) {
    decoder.ip      = ip;
    decoder.lon     = res.data.longitude;
    decoder.lat     = res.data.latitude;
    decoder.city    = res.data.city;
    decoder.country = res.data.country_name;
    // console.log(res);
    return decoder._wrap();
  }).catch(function(rej){return rej});
}
export { decoder };
