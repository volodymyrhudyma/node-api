var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Images = new Schema({
    kind: {
        type: String,
        enum: ['thumbnail', 'detail']
    },
    url: { type: String }
});

var MusicianSchema = new Schema({
  name: String,
  band: String,
  instrument: String,
  images: [Images]
});

mongoose.model('Musician', MusicianSchema);