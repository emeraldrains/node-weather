//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const axios = require(`axios`);

const forecast = async (address) => {

  try {
    const response = await axios.get(`https://api.darksky.net/forecast/dda923b12775c7af6b8bf340459053f2/${address.center[1]},${address.center[0]}`);

    // destructure response into response.data

    const currentTemp = response.data.currently.apparentTemperature;
    const rainProb = response.data.currently.precipProbability;
    const today = response.data.daily.data[0].summary;
    const location = address.place_name;

    return {
      location,
      currentTemp,
      rainProb,
      today
    };
  } catch (err) {
    console.log(err);
  }


};

// forecast(-75.7088, 44.1545, ( => {
//   console.log(;
// });



module.exports = forecast;