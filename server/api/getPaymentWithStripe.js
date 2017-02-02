'use strict'


// test secret key: sk_test_huZ12ceoJcvcb2j2HKdsMfuq
// test publishable key: pk_test_ySXpzVzuSziQKkNfPPaWYSBv

var router = require('express').Router();

var stripe = require("stripe")(
'sk_test_huZ12ceoJcvcb2j2HKdsMfuq');



router.post('/', function(req,res,next){

	console.log(req.body)
	const amount = '99'
	const email = 'joe@something.com'
	const token = req.body.stripeToken;

	const callback = function(err, charge) {
		// if err throw error
		if (err){
			console.log("err: " + err);
			res.sendStatus(404);
		}
		if(charge.outcome.network_status ==='approved_by_network'){
			 res.sendStatus(200)
		}
	};

	stripe.charges.create({
	  amount: amount,
	  currency: "usd",
	  source: token, // obtained with Stripe.js
	  description: "Charge for " + email
	}, callback)

	// next();
})


module.exports = router;
