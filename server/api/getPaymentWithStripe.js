'use strict'


// test secret key: sk_test_huZ12ceoJcvcb2j2HKdsMfuq
// test publishable key: pk_test_ySXpzVzuSziQKkNfPPaWYSBv

var router = require('express').Router();

var stripe = require("stripe")(
'sk_test_huZ12ceoJcvcb2j2HKdsMfuq');



router.post('/', function(req,res,next){

	console.log(req.body)
	const amount = req.body.amount;
	const email = req.body.email;
	const token = req.body.stripeToken;

	stripe.charges.create({
	  amount: amount,
	  currency: "usd",
	  source: token, // obtained with Stripe.js
	  description: "Charge for " + email
	}, function(err, charge) {
	  // asynchronously called
	});



	next();
})


module.exports = router;