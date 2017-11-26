export let decoder = {
  translate: function(ip) {
    let that = this;
    return new Promise(function(resolve, reject) {
      let geo_ip;
      switch (ip) {
        case '127.0.0.1':
          geo_ip = 'localhost';
          break;
        default:
          geo_ip = 'Not localhost';
      }
      resolve(that._decor(ip, null, null, geo_ip, geo_ip));
    })
  },
  _decor: (ip, lon, lat, city, country) => {
    return {
      ip: ip || '0.0.0.0',
      lon: lon || '0.0',
      lat: lat || '0.0',
      city: city || 'Unknown',
      country: country || 'Unknown'
    }
  }
}
