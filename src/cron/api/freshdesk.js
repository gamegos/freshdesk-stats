'use strict';
var unirest = require('unirest')
  , config = require('../../../config')
  , exports = module.exports;


exports.getAllTickets = function(callback, target, due_by) {
  unirest
  .get(target)
  .auth({
    user: config.API_KEY,
    pass: 'X',
    sendImmediately: true
  })
  .end(function(response) {
    var tickets = response.body;
    if(typeof due_by === 'undefined') {
      callback(tickets);
    } else {
      callback(
        tickets.filter(function(element) {
          return element.created_at >= due_by;
        })
      );
    }
  });
};
