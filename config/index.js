var lodash = require('lodash');

module.exports = lodash.extend(
  require('./api'),
  require('./dialect')
);
