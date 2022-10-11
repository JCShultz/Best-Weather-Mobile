const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  pass: String,//hash that password
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
