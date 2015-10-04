var config = require('../config'),
  knex = require('knex')(config.database),
  Bookshelf = require('bookshelf')(knex);

module.exports = Location = Bookshelf.Model.extend({
    tableName: 'locations',
    hasTimestamps: true
});