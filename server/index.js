//create express server and routes here:

const express = require("express");
//const control = require("./controllers.js");
const axios = require("axios");
const app = express();

//body parser:
app.use(express.json());

//server static:
app.use(express.static("public"));

//REQUEST ROUTES:

//handle get requests for forecast of specific locations
app.get('/forecast', (req,res)=>{
  //enter in axios req to NOAA API
  console.log(req.body);
  res.send('delete').status(200).end();
});

//handle post requests for locations
app.post('/addlocation', (req,res)=>{
  //add location to DB
  res.send('create').status(201).end();
})

//handle delete requests for locations
app.delete('/location', (req,res)=>{
  //remove location from DB
  res.send('delete').status(200).end();
});

app.listen(3000);
console.log("listening at: 3000");