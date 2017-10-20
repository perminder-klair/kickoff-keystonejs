import keystone from 'keystone';

const Car = keystone.list('Car');

// https://github.com/apollographql/apollo-tutorial-kit/tree/server-tutorial-solution
export default {
  Query: {
    cars: async (obj, args) => {
      const where = {};
      if (args.slug) {
        where.slug = args.slug;
      }
      return await Car.model
        .find(where)
        .sort('price')
        .exec();
    },
  },
};
