'use strict';
module.exports = function(epilogue, models, middleware) {

  var ticketRes = epilogue.resource({
    model: models.ticket,
    endpoints: ['/api/freshdesk/tickets', '/api/freshdesk/tickets/:id'],
    search: require('./filter')
  });
  ticketRes.use(middleware);
};
