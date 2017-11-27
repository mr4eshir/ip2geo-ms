export let decoder = {
  ip: null,
  lon: null,
  lat: null,
  city: null,
  country: null,
  translate: function(ip) {
    this.ip = ip;
    switch (ip) {
      case '127.0.0.1':
        this.city = 'localhost';
        this.country = 'localhost';
        break;
      default:
        this.geo_ip = 'Not localhost';
        this.geo_ip = 'Not localhost';
    }
    return this._wrap();
  },
  _wrap: () => {
    return new Promise((resolve, reject) => {
      if(!decoder.city && !decoder.country) {
        reject();
      }
      resolve(decoder._decor(decoder.ip, decoder.lon, decoder.lat, decoder.city, decoder.country));
    });
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
