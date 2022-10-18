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
  console.log('+++++++++++++++', req.body.locations[0].name)
  return db.UserItem.findOneAndUpdate(
    { name: req.body.name },
    { $push: {locations: {name: req.body.locations[0].name, lat: req.body.locations[0].lat, long: req.body.locations[0].long} }
  })
}