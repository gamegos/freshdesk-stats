'use strict';

module.exports = {
  list: {
    fetch: {
      before: function(req, res,context) {
        var MIN = 60 * 1000;
        var time = 0;
        if(req.query.attr) {
          context.options.attributes = (req.query.attr instanceof Array)? req.query.attr: [req.query.attr];
        }
        if(req.query.day) {
          time += req.query.day * 24 * 60 * MIN;
          delete req.query.day;
        }
        if(req.query.hour) {
          time = req.query.hour * 60 * MIN;
          delete req.query.hour;
        }
        if(req.query.minute) {
          time += req.query.minute * MIN;
          delete req.query.minute;
        }
        if(time) {
          req.query.date = new Date(new Date().getTime() - time);
        }
        return context.continue;
      }
    }
  }
};
