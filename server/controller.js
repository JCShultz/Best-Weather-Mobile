const axios = require("axios");


//retrieves the forecast information from NOAA's API
exports.retrieve = (req, res) => {
  axios.get(`https://api.weather.gov/points/${req.body.lat},${req.body.long}`)
    .then((body) => {
      axios.get(body.data.properties.forecast)
        .then((body) => {
            res.send(body.data.properties.periods,
          ).status(200).end();
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}
