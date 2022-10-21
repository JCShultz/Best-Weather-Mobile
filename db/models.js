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
    { $push: {locations: {name: req.body.locations[0].name, lat: req.body.locations[0].lat, long: req.body.locations[0].long} }}
  )
}


//TODO - remove locations from DB for specific user and matching location name
exports.deleteLoc = (req) =>{
  console.log(req.body.location, req.body.user)

  return db.UserItem.find({
    name: req.body.user
  })
  .then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}

