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
    { $push: {locations: req.body.loc }}
  )
}