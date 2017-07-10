'use strict';

module.exports = {
  list: {
    fetch: {
      before: function(req, res, context) {
        context.options.attributes = ['created_at'];
        req.query.sort = "created_at";//ascending order
        return context.continue;
      }
    },
    write: {
      action: function(req, res, context) {
        var SECOND = 1000;
        var data = context.instance;//fetching results
        var interval = req.query.interval;
        var begin = toTimeStamp(data[0].dataValues);
        var end = toTimeStamp(data[data.length -1].dataValues);
        var result = [];
        for(var cur = 0; begin < end; begin += SECOND * interval) {
          var nums = 0;
          for(; toTimeStamp(data[cur].dataValues) <= begin; nums++, cur++);
          result.push({
            [begin]: nums
          });
        }
        res.send(JSON.stringify(result));
      }
    }
  }
}

function toTimeStamp(val) {
  var created_at = val.created_at;
  return new Date(created_at).getTime();
}
