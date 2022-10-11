//create db schema model and connections here:
//imports:
const mongoose = require("mongoose");

//connection to mongodb
mongoose.connect('mongodb://localhost:27017/user')
  .then(() => (
    console.log('DB connection established')
  ))
  .catch((err) => (
    console.log('DB not connected: ', err)
  ));

