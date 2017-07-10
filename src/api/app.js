'use strict';
var app = require('express')()
  , bodyParser = require('body-parser')
  , models = require('../models')
  , epilogue = require('epilogue')
  , path = require('path')
  , db = require('../models/index').sequelize
  , ticketMiddleware = require('./middlewares/ticket')
  , statsMiddleware = require('./middlewares/stats');

//configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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
