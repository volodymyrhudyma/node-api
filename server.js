// Tutorial link: http://bigspaceship.github.io/blog/2014/05/14/how-to-create-a-rest-api-with-node-dot-js/

var express = require('express'),
	mongoose = require('mongoose'),
	fs = require('fs');

var mongoUri = 'mongodb://localhost/noderest';
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});

require('./models/musician');
require('./routes')(app);

app.listen(3001);
console.log('Listening on port 3001...');