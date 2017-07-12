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
    if(response.status < 400) {
      var tickets = response.body;
      callback(tickets);
    } else if(response.status === 401) {
      console.log('Authorization failed!');
    } else if(response.status === 403) {
      console.log('You exceeded the number of requests allowed for per hour');
    } else {
      console.log('Something went wrong!')
    }
  });
};
