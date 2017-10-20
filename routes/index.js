import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import keystone from 'keystone';
import bodyParser from 'body-parser';

import middleware from './middleware';
import graphQLSchema from '../graphql';

var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);

// Import Route Controllers
var routes = {
  views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function(app) {
  // Views
  app.get('/', routes.views.index);
  app.post(
    '/graphql',
    bodyParser.json(),
    graphqlExpress({ schema: graphQLSchema }),
  );
  app.get(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
    }),
  );
};
