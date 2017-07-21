'use strict';
var config = require('../../../config/api');
var anomaly = require('../anomaly-detection');

//services


require('./services/email-service')(config, anomaly, function(template, transport, locals, option) {

  template.render(locals, function(err, result) {
    if(err) {
      return console.error(err);
    }
    transport.sendMail({
      to: locals.email,
      subject: 'Sudden ' + option + ' on freshdesk tickets!',
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
