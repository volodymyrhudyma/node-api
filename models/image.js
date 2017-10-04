var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ImageSchema = new Schema({
    url: { type: String }
});

mongoose.model('Image', ImageSchema);