module.exports = function() {
  switch(process.env.NODE_ENV) {
    case 'production':
      return require('./production');
    case 'development':
      return require('./development');
    default:
      return require('./development');
  }
}
