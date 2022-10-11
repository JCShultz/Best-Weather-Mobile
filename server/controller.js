const axios = require("axios");
const db = require("../db/db.js")

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

//add user to db
exports.addUser = (req, res) =>{
  db.UserItem.create({
    name: req.body.name,
    pass: req.body.pass
  })
  .then((body)=>{
    res.send().status(201).end();
  })
  .catch((err)=>{
    console.log('server: ', err);
  })
}

//retrieve list from db based on user and password

//delete list item from the user list in the db

//add item to the user list in the db