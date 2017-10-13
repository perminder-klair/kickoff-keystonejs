const User = require('../../models/User');

export default {
  Query: {
    allUsers: async () => User.find().sort('-createdAt'),
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
