'use strict';

var router = require('express').Router();

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));

router.use('/login', require('./login/login.router'));

router.use('/pay', require('./getPaymentWithStripe.js'))

router.use('/paypal', require('./getPaymentWithPaypal.js'))

module.exports = router;
