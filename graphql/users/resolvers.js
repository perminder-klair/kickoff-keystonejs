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
      const newData = new User.model(args.input);
      await newData.save();
      return newData;
    },
  },
};
