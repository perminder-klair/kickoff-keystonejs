import keystone from 'keystone';
import conf from './config';

keystone.init({
  name: conf.get('project.name'),
  'auto update': true,
  mongo: conf.get('mongodb'),
  // 'cloudinary config': 'SET-CLOUDINARY-URL-HERE',
  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': conf.get('cookieSecret'),
  port: conf.get('port'),
  env: conf.get('env'),
});

require('./models');

keystone.set('cors allow origin', false);
keystone.set('routes', require('./routes'));

keystone.start();
