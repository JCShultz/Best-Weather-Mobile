const db = require('./db.js');

//find a user information
exports.returnUser = (req) => {
  return db.UserItem.find({
    name: req.body.name,
    pass: req.body.pass
  })
}

//adds locations to a users list
exports.addLoc = (req) => {
  return db.UserItem.findOneAndUpdate(
    { name: req.body.name },
    { $push: { locations: { name: req.body.locations[0].name, lat: req.body.locations[0].lat, long: req.body.locations[0].long } } }
  )
}

//removes locations from a users list
exports.deleteLoc = (req) => {
  console.log(req.body.location)
  return db.UserItem.findOneAndUpdate(
    { name: req.body.user},
    { $pull: {locations: {name: req.body.location}}}
  )
}

