let axios = require('axios');

// an async function will return a promise
const geocode = async (address) => {

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoidHdpbGlnaHRyYWluIiwiYSI6ImNrNnh5ZmtxMjA3aTkzbW12bDQzbjN2cjQifQ.ArT6V-0YkF6ciwfTBuSGhA`;

  // await a promise and store the promise in response variable when it resolves/rejects
  // only works inside async functions
  const response = await axios.get(url);

  return response.data.features[0];
  
};

module.exports = geocode;