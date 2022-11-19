const axios = require("axios");
const db = require("../db/db.js");
const model = require("../db/models.js");

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
          //console.log(err);
        })
    })
    .catch((err) => {
      console.log(err);
    })
}

//add user to db
exports.addUser = (req, res) =>{
  model.returnUser(req)
  .then((body)=>{
    console.log('find user: ', body.length);
    if(body.length === 0){
      db.UserItem.create({
        name: req.body.name,
        pass: req.body.pass
      })
      .then((body)=>{
        res.send().status(201).end();
      })
      .catch((err)=>{
        console.log('create: ', err);
      })
    }else{
      res.send('user already exists').status(200).end();
    }
  })
  // }
}

//login user
exports.loginUser = (req, res) =>{
  //console.log('in server: ', db.UserItem.find({name: req.body.name}));
  // if(users.length > 0 && users.indexOf({name: req.body.name, pass: req.body.pass}) < 0){
    model.returnUser(req)
    .then((body)=>{
     // console.log('body',body)
      res.send(body).status(200).end();
    })
    .catch((err)=>{
      console.log('login: ', err);
    })
  // }
}

//add item to the user list in the db
exports.addLocation = (req, res) =>{
  model.addLoc(req)
  .then((body)=>{
    res.send().status(201).end();
  })
  .catch((err)=>{
    console.log('Error in addLoc in controller.js: ', err);
  })
}

//remove location from user list in from db
exports.removeLocation = (req, res) =>{
  model.deleteLoc(req)
  .then((body)=>{
    console.log('delete in controllers: ', req.body)
  })
  .catch((err)=>{
    console.log('Error in removeLocation in controller.js: ', err)
  })
}