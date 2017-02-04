'use strict'

var router = require('express').Router();
var paypal = require('paypal-rest-sdk');
	
paypal.configure({
    'mode': 'sandbox',
    // 'client_id': 'Ae5y5mFfQ0Y9kK690MWIXQfe57s0rtKgi82ptIL-t9asvNTlW226WvwqszqH33iLpmuiUcp6GX36FpNI',
    // 'client_secret': 'EBYK_npNr--HnPNzHlrrAiOP5WBiwwQ925hntGWMzHY-aQDRq6CKFE60mOK5YKnwaiJxuLLb8sqOyZcC',
    'client_id':'AcKbAY10U6xwWzAMvxpwhnSlc2TavlJi0fZwC117iBz62GI_JHWp5mRoG_oQ_0KpsndLuBRfSKs2DqzR',
    'client_secret': 'EAyBteicrWOfqNaSdHYhbvS7kDqg9YQXVGh2rnpJ1Cx_UfUyilppQpHwfkF6UYAo9Xgy45YSMWiyxEJb',
	'headers' : {
		'custom': 'header'
    }
});

router.post('/create', function(req,res,next){

		var create_payment_json = {
	    "intent": "sale",
	    "payer": {
	        "payment_method": "paypal"
	    },
	    "redirect_urls": {
	        "return_url": "http://localhost:8080/",
	        "cancel_url": "http://localhost:8080/"
	    },
	    "transactions": [{
	        "item_list": {
	            "items": [{
	                "name": "item",
	                "sku": "item",
	                "price": "1.00",
	                "currency": "USD",
	                "quantity": 1
	            }]
	        },
	        "amount": {
	            "currency": "USD",
	            "total": "1.00"
	        },
	        "description": "This is the payment description."
	    }]
	};


	paypal.payment.create(create_payment_json, function (error, payment) {
	    if (error) {
	        throw error;
	    } else {
	        console.log("Create Payment Response");
	        console.log(payment);
	        res.send(payment)
	    }
	});


	// next();
})


router.post('/exec', function(req,res,next){

	console.log('executing payment', req)
	var execute_payment_json = {
	    "payer_id": req.body.payerID.toString(),
	    "transactions": [{
	        "amount": {
	            "currency": "USD",
	            "total": "1.00"
	        }
	    }]
	};

	var paymentId = req.body.paymentID.toString();

	paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
	    if (error) {
	        console.log(error.response);
	        throw error;
	    } else {
	        console.log("Get Payment Response");
	        console.log(JSON.stringify(payment));
	        res.status(200).send(JSON.stringify(payment))
	    }
	});

})



module.exports = router;
