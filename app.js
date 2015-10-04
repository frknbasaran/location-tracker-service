/*
  @author: Furkan BAŞARAN
  @date: 05.10.2015
*/
var express = require('express'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  app = express();

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

var locationRouter = require('./routes/location');

// body-parser middleware for handling request variables
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('port', config.port);
app.use(express.static('public'));

app.use('/api/locations', locationRouter);

app.listen(app.get('port'), function() {
    console.log("✔ App alive on port %d in %s mode", app.get('port'), app.get('env'));
});