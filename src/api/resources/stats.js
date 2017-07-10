'use strict';
module.exports = function(epilogue, models, middleware) {

  var statsRes = epilogue.resource({
    model: models.ticket,
    endpoints: ['/api/freshdesk/stats', '/api/freshdesk/stats/:id'],
    search: require('./filter')
  });
  statsRes.use(middleware);
};
