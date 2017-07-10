'use strict';
var unirest = require('unirest')
  , config = require('../../../config')
  , exports = module.exports;


exports.getAllTickets = function(callback, target) {
  unirest
  .get(target)
  .auth({
    user: config.API_KEY,
    pass: 'X',
    sendImmediately: true
  })
  .end(function(response) {
    var tickets = response.body;
    callback(tickets);
  });
};
