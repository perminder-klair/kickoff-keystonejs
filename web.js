require('babel-core/register');

var keystone = require('keystone');

keystone.init({
  name: 'kickoff-keystonejs',
  'auto update': true,
  mongo: 'SET-MONGODB-URL-HERE',
  'cloudinary config': 'SET-CLOUDINARY-URL-HERE',
  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': 'SET-COOKIE-SECRET-here',
});

require('./models');

keystone.set('routes', require('./routes'));

keystone.start();
