import { makeExecutableSchema } from 'graphql-tools';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import UsersSchema from './users/schema';
import UsersResolvers from './users/resolvers';
import CarsSchema from './cars/schema';
import CarsResolvers from './cars/resolvers';

export default makeExecutableSchema({
  typeDefs: mergeTypes([UsersSchema, CarsSchema]),
  resolvers: mergeResolvers([UsersResolvers, CarsResolvers]),
});
