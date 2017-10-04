// Tutorial link: http://bigspaceship.github.io/blog/2014/05/14/how-to-create-a-rest-api-with-node-dot-js/

var express = require('express'),
	fs = require('fs'),
	config = require('./libs/config');

var app = express();

app.configure(function(){
    app.use(express.bodyParser());
	app.use(express.logger('dev'));
});

require('./libs/mongoose');
require('./models/musician');
require('./routes')(app);

var port = config.get('port');
app.listen(port);
console.log('Listening on port ' + port);