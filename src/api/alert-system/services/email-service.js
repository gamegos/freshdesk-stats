
var nodemailer = require('nodemailer')
  , EmailTemplate = require('email-templates').EmailTemplate
  , path = require('path')
  , request = require('request')
  , template = new EmailTemplate(path.join(__dirname, 'templates'));//define template directory


exports = module.exports = function(config, anomaly, callback) {
  var param = "interval=" + config.alertInterval;
  request.get('http://localhost:5000/api/freshdesk/stats?' + param, function(err, response, body) {
    if(err || response.statusCode >= 400) {
      return;
    }
    var chunk = JSON.parse(body).map(function(json) {
      for(var prop in json) {
        return json[prop];
      }
    });
    var lag = chunk.length - 2;
    var signals = anomaly(chunk, lag, config.threshold, config.influence);
    var last = signals.pop();
    // if amy anormality detected on last item, function email service
    if(last === 1) {
      //init transporter service
      var transport = nodemailer.createTransport(config.transport, {
         from: 'freshdesk-stats <freshdesk-stats@gmail.com>'
      });
      callback(template, transport);
    }
  });
};
