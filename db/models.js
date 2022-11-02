const db = require('./db.js');


exports.returnUser = (req) => {
  //console.log(req.body)
  return db.UserItem.find({
    name: req.body.name,
    pass: req.body.pass
  })
}

exports.addLoc = (req) => {
  return db.UserItem.findOneAndUpdate(
    { name: req.body.name },
    { $push: { locations: { name: req.body.locations[0].name, lat: req.body.locations[0].lat, long: req.body.locations[0].long } } }
  )
}


//TODO - remove locations from DB for specific user and matching location name
exports.deleteLoc = (req) => {
  console.log(req.body.location, req.body.user)

  // return db.UserItem.updateOne(
  //   { name: req.body.name },
  //   { $pull: { locations: { location: req.body.location } } }
  // )

  return db.UserItem.findOneAndUpdate(
    { name: req.body.user},
    { $pull: {locations: {name: req.body.location}}}
  )
  .then((data)=>{
    console.log('here: ', data)
  })
}

