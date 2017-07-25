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
      transport.sendMail({
        to: locals.email,
        subject: 'Sudden increase on freshdesk tickets!',
        html: result.html
      }, function(err, res) {
        if(err) {
          return console.error(err);
        }
        console.log('Message sent successfully!');
        transport.end();
      });
    });
  });
}
