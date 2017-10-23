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
  app.use(function(req, res, next) {
    // allow cross origin requests
    res.setHeader(
      'Access-Control-Allow-Methods',
      'POST, PUT, OPTIONS, DELETE, GET',
    );
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });
  app.options('/*', (req, res) => {
    res.json({ success: true });
  });

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
