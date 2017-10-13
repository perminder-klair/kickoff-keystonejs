var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var bodyParser = require('body-parser');
var apollo = require('apollo-server-express');

// Common Middleware
keystone.pre('routes', middleware.initLocals);

var graphQLSchema = require('../graphql');

// Import Route Controllers
var routes = {
  views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function(app) {
  // Views
  app.get('/', routes.views.index);
  // app.use(
  //   '/graphql',
  //   bodyParser.json(),
  //   apollo.graphqlExpress({ schema: graphQLSchema }),
  // );
  // app.get(
  //   '/graphiql',
  //   apollo.graphiqlExpress({
  //     endpointURL: '/graphql',
  //   }),
  // );
};
