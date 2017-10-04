var mongoose = require('mongoose'),
	config = require('./config'),
	log = require('./log')(module);

var mongoUri = config.get('mongoose:uri');
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});