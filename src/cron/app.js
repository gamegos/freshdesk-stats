'use strict';

var express = require('express')
  , bodyParser = require('body-parser')
  , app = express()
  , Ticket = require('../models').ticket
  , fresh = require('./api/freshdesk');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/freshdesk', function(req, res) {
  var target = req.query.target;
  var due_by = req.query.due_by;

  fresh.getAllTickets(function(tickets) {
    tickets.forEach(function(element) {
      //insert if not exists
      Ticket.findOrCreate({
        where: {
          display_id: element.display_id
        },
        defaults: element
      });
    });
  }, target, due_by);
});

module.exports = app;
