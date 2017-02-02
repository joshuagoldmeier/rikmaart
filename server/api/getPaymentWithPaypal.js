'use strict'

var router = require('express').Router();
var paypal = require('paypal-rest-sdk');


router.get('/', function(req,res,next){
	console.log(req.body)
	// next();
})


module.exports = router;
