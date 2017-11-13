import keystone from 'keystone';
import conf from './config';
require('dotenv').load();

module.exports = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: conf.get('s3.key'),
    secret: conf.get('s3.secret'),
    bucket: conf.get('s3.bucket'),
    region: 'us-west-2',
    path: '/uploads',
    headers: {
      'x-amz-acl': 'public-read',
    },
  },
  schema: {
    path: true,
    url: true,
  },
});
