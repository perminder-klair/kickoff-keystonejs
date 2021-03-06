import keystone from 'keystone';

import middleware from './middleware';

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
};
