'use strict';
var config = require('../../../config/api')
  , anomaly = require('../anomaly-detection');

module.exports = function() {
  //services
  require('./services/email-service')(config, anomaly, function(template, transport) {
    var locals = config.locals;

    template.render(locals, function(err, result) {
      if(err) {
        return console.error(err);
      }
      var async = require('async');
      var recepients = locals.recepients.split(',');
      async.each(recepients, function(to, callback) {
        transport.sendMail({
          to: to,
          subject: 'Sudden increase on freshdesk tickets!',
          html: result.html
        }, function(err, info) {
          if(err) {
            return console.error(err);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
        });
      })
    });
  });
}
