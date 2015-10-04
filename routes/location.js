var express = require('express'),
    config  = require('../config'),
    router  = express.Router(),
    Location = require('../models/Location'),
    knex = require('knex')(config.database),
    Bookshelf = require('bookshelf')(knex);

var Locations = Bookshelf.Collection.extend({
  model: Location
});

router.route('/')

.get(function (req, res) {
  if (typeof req.params.lat !== undefined && typeof req.params.lon !== undefined) {
    Location.forge({
      lat: req.params.lat,
      lon: req.params.lon
    })
    .save()
    .then(function (location) {
      res.json({error: false, data: {id: location.get('id')}});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  } else {
    Locations.forge()
    .fetch()
    .then(function (collection) {
      res.json({error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });  
  }
})

module.exports = router;