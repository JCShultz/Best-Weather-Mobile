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

//schema definition
const userSchema = new mongoose.Schema({
  name: String,
  pass: String,
  location1: String,
  location2: String,
  location3: String,
  location4: String,
  location5: String
});

//model- constructor compiled from schema
const UserItem = mongoose.model('UserItem', userSchema);

//exports:
module.exports = {
  UserItem,
}
