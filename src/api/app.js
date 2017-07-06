'use strict';
var app = require('express')()
  , bodyParser = require('body-parser')
  , models = require('../models')
  , epilogue = require('epilogue')
  , db = require('../models/index').sequelize
  , restMiddleware = require('./middleware');

//configs
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//initiliazing epilogue for resource management
epilogue.initialize({
  app: app,
  sequelize: db
});

//resources===================================
require('./resources/ticket')(epilogue, models, restMiddleware);


//expose app and db
module.exports = {
  db: db,
  app: app
};
