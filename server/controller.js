const axios = require("axios");

exports.retrieve = (req, res) => {
  //enter in axios req to NOAA API

  console.log(req.body);
  axios.get(`https://api.weather.gov/points/${req.body.lat},${req.body.long}`)
    .then((body) => {
      axios.get(body.data.properties.forecast)
        .then((body) => {
          res.send(body.data.properties.periods).status(200).end()
        })
        .catch((err) => {
          console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}
