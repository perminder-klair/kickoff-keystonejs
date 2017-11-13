import convict from 'convict';
import fs from 'fs';
import dotenv from 'dotenv';

// to load .env file
dotenv.config();

const conf = convict({
  project: {
    name: {
      doc: 'Project name',
      format: String,
      default: 'kickoff-keystonejs',
    },
  },
  cookieSecret: {
    doc: 'Cookie Secret',
    format: String,
    default: 'SET-COOKIE-SECRET-HERE',
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV',
  },
  ip: {
    doc: 'The ip address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 4000,
    env: 'PORT',
  },
  mongodb: {
    doc: 'URL to mongodb.',
    format: String,
    default: '',
    env: 'MONGODB',
  },
  mailer: {
    user: {
      doc: 'Mailer user.',
      format: String,
      default: '',
    },
    password: {
      doc: 'Mailer password.',
      format: String,
      default: '',
    },
  },
  s3: {
    bucket: {
      doc: 'S3 Bucket name.',
      format: String,
      default: '',
    },
    key: {
      doc: 'S3 AWS_ACCESS_KEY_ID.',
      format: String,
      default: '',
    },
    secret: {
      doc: 'S3 AWS_SECRET_ACCESS_KEY.',
      format: String,
      default: '',
    },
  },
});

const env = conf.get('env');
try {
  const path = `${__dirname}/${env}.json`;

  console.log('trying to access %s', path);
  fs.accessSync(path, fs.F_OK);

  conf.loadFile(path);
} catch (error) {
  console.log("file doesn't exist, loading defaults");
}

conf.validate({ allowed: 'strict' });

export default conf;
