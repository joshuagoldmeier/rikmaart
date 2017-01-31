'use strict';

var app = require('express')();
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var User = require('../api/users/user.model');

app.use(require('./logging.middleware'));
app.use(require('./request-state.middleware'));
app.use(require('./statics.middleware'));


app.use('/api', require('../api/api.router'));

var indexPath = path.join(__dirname, '..', '..', 'browser', 'index.html');
app.get('/', function(req, res, next){
  res.sendFile(indexPath);
})


app.use(require('./error.middleware'));

module.exports = app;
