const keystone = require('keystone');
require('dotenv').load();

module.exports = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: 'MY-KEY',
    secret: 'MY-SECRET',
    bucket: 'MY-BUCKET',
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
