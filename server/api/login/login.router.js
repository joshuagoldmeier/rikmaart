var router = require('express').Router();

var User = require('../users/user.model');

router.post('/', function(req, res, next){
  console.log("In the Post route")
  User.findOne({
    where: req.body
  })
  .then(user => {
    if (!user) {
      res.sendStatus(401);
    } else {
      req.session.userId = user.id;
      req.session.expires = 3000;
      res.status(200).json(user);
    }
  })
  .catch(next)
})


router.post('/new', function(req, res, next){

  User.create(req.body)
  .then(function (user) {
    req.session.userId = user.id;
    res.status(201).json(user);
  })
  .catch(next);
})

module.exports = router;
