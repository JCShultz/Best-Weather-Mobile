const db = require('./db.js');


exports.returnUser = (req) => {
  //console.log(req.body)
  return db.UserItem.find({
    name: req.body.name,
    pass: req.body.pass
  })
}