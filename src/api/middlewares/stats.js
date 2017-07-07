'use strict';

module.exports = {
  list: {
    fetch: {
      before: function(req, res, context) {
        return context.continue;
      }
    },
    write: {
      before: function(req, res, context) {
      // modify data before writing list data
        return context.continue;

      },
      action: function(req, res, context) {
        // change behavior of actually writing the data
        return context.continue;

      },
      after: function(req, res, context) {
        // set some sort of flag after writing list data
        res.render('index', {
          title: 'Histogram',
        });
        return context.continue;

      }
    }
  }
}
