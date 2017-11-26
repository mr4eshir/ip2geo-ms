let axios=require('axios');
import { decoder } from './abstract';
decoder.translate = function(ip) {
  let data = axios.get('http://freegeoip.net/json/'+ip);
  return data.then(function(res) {
    return new Promise(function(resolve, reject) {
      resolve(decoder._decor(ip, res.data.longitude, res.data.latitude, res.data.city, res.data.country_name));
    })
  }).catch(function(rej){return rej});
}
export { decoder };
