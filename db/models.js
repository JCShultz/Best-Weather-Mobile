const db = require('./db.js');


exports.returnUser = (req) => {
  //console.log(req.body)
  return db.UserItem.find({
    name: req.body.name,
    pass: req.body.pass
  })
}



///SORT OUT
exports.addLoc = (req) => {
  console.log('+++++++++++++++')
  return db.UserItem.findOneAndUpdate(
    { name: req.body.name },
    { $push: {locations: {name: req.body.locations.name, lat: req.body.locations.lat, long: req.body.locations.long} }
  })
}