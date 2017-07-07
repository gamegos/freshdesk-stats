'use strict';
module.exports = function(epilogue, models, middleware) {

  var ticketRes = epilogue.resource({
    model: models.ticket,
    endpoints: ['/api/freshdesk/tickets', '/api/freshdesk/tickets/:id'],
    search: [
      { operator: '$gt', param: 'priority>', attributes: ['priority']},
      { operator: '$lt', param: 'priority<', attributes: ['priority']},
      { operator: '$ne', param: 'priority!', attributes: ['priority']},
      { param: 'subject%', attributes: ['subject']},//operator: $like default
      { param:'request_name%', attributes: ['request_name']},
      { param: 'responder_name%', attributes:['responder_name']},
      { param: 'priority%', attributes:['priority_name']},
      { param: 'description%', attributes:['description']},
      { param: 'source%', attributes:['source_name']},
      { param: 'status%', attributes: ['status_name']},
      { param: 'to_email%', attributes: ['to_email']},
      { param: 'due_by%', attributes: ['due_by']},
      { operator: '$gte', param: 'date', attributes: ['created_at']}

    ]
  });
  ticketRes.use(middleware);
};
