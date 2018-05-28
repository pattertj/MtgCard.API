var express = require('express'); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var bodyParser = require('body-parser'); // body-parser to help deal with JSON requests
var database = require('./app/config/database'); // load the database config

const app = express();
const port = 8000;

mongoose.connect(database.remoteUrl); // Connect to local MongoDB instance. A remoteUrl is also available (modulus.io)

require('./app/routes')(app, {});

app.listen(port, () => {
  console.log('We are live on ' + port);
});