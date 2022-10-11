const config = require("../config.js");

//create express server and routes here:

const express = require("express");
//const control = require("./controllers.js");
const axios = require("axios");
const app = express();

const contr = require('./controller.js')

//body parser:
app.use(express.json());

//server static:
app.use(express.static("public"));

//REQUEST ROUTES:


//REQUESTS FOR INFO FROM NOAA API
//handle get requests for forecast of specific locations
app.post('/forecast', contr.retrieve);



//REQUESTS FOR INFO IN DB:
//handles get requests for user info
app.get('/user', (req, res) => {
  //add location to DB
  console.log("client ping")
  res.send('create').status(201).end();
})


//handle post requests for locations
app.post('/user', (req, res) => {
  //add location to DB
  res.send('create').status(201).end();
})

//handle delete requests for locations
app.delete('/user', (req, res) => {
  //remove location from DB
  res.send('delete').status(200).end();
});

app.listen(config.srvPort);
console.log(`listening at: ${config.ip}:${config.srvPort}`);