const cardRoutes = require('./card_routes');

module.exports = function(app, db) {
  cardRoutes(app, db);
  // Other route groups could go here, in the future
};