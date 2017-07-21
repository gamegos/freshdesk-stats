
var nodemailer = require('nodemailer');
var EmailTemplate = require('email-templates').EmailTemplate;
var path = require('path');

//define template directory
var templateDir = path.join(__dirname, 'templates');

exports = module.exports = function(config, anomaly, callback) {

  //init transporter service
  var transport = nodemailer.createTransport(config.transport, {
     from: 'freshdesk-stats <freshdesk-stats@gmail.com>'
  });

  var locals = config.locals;
  var option = 'increase';//(increase) ? 'increase': 'decrease';

  if(option === 'increase') {
    var template = new EmailTemplate(path.join(templateDir, 'increase'));
  } else {
    var template = new EmailTemplate(path.join(templateDir, 'decrease'));
  }

  //callback if any anomaly detection detected!
  callback(template, transport, locals, option);

};
