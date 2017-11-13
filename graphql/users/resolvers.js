import keystone from 'keystone';

const User = keystone.list('User');

export default {
  Query: {
    users: async () =>
      User.model
        .find()
        .sort('-createdAt')
        .exec(),
  },
  Mutation: {
    addUser: async (root, args) => {
      const newData = new User({
        fullName: args.input.fullName,
        postcode: args.input.postcode,
      });

      newData.save();
      return newData;
    },
  },
};
