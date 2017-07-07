'use strict';
var app = require('express')()
  , bodyParser = require('body-parser')
  , models = require('../models')
  , epilogue = require('epilogue')
  , path = require('path')
  , cons = require('consolidate')
  , db = require('../models/index').sequelize
  , ticketMiddleware = require('./middlewares/ticket')
  , statsMiddleware = require('./middlewares/stats');

//configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//view engine setup
app.engine('jade', cons.jade);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname + '/views'));

//initiliazing epilogue for resource management
epilogue.initialize({
  app: app,
  sequelize: db
});

//resources===================================
require('./resources/ticket')(epilogue, models, ticketMiddleware);
require('./resources/stats')(epilogue, models, statsMiddleware);


//expose app and db
module.exports = {
  db: db,
  app: app
};
