import keystone from 'keystone';

// const s3Storage = require('../config/s3');

var Types = keystone.Field.Types;

/**
 * Car Model
 * ==========
 */
var Car = new keystone.List('Car', {
  autokey: { path: 'slug', from: 'title', unique: true },
  map: { name: 'title' },
  defaultSort: '-createdAt',
  track: true,
});

Car.add({
  name: { type: String, required: true },
  slug: { type: String, readonly: true, hidden: true, index: true },
  description: { type: Types.Markdown },
  status: {
    type: Types.Select,
    options: [
      { value: 'not-active', label: 'Not Active' },
      { value: 'active', label: 'Active' },
    ],
  },
  price: { type: Types.Number, initial: true, required: true },
  // image: { type: Types.File, storage: s3Storage },
});

/**
 * Registration
 */
Car.defaultColumns = 'name, price, createdAt|15%';
Car.register();
