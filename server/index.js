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


//REQUESTS FOR INFO FROM NOAA API BASED ON LAT,LONG
//handle get requests for forecast of specific locations
app.post('/forecast', contr.retrieve);



//REQUESTS FOR INFO IN DB:


//handle post requests creating user
app.post('/user', contr.addUser);

//handles post req to login checks if username and pword is in db and returns user info
app.post('/login', contr.loginUser);

//handle post requests for adding locations
app.post('/location', contr.addLocation);

//handle delete requests for locations
app.delete('/user', (req, res) => {
  //remove location from DB
  res.send('delete').status(200).end();
});

app.listen(config.srvPort);
console.log(`listening at: ${config.ip}:${config.srvPort}`);