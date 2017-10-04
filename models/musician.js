var mongoose = require('mongoose'),
	Image = require('./image'),
	Schema = mongoose.Schema;

var MusicianSchema = new Schema({
    name: String,
    band: String,
    instrument: String,
    image: [Image]
});

mongoose.model('Musician', MusicianSchema);