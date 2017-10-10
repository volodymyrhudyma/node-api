var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TechnologySchema = new Schema({
    name: String,
    slug: String,
    favorited: Boolean,
    usageCount: Number,
});

mongoose.model('Technology', TechnologySchema);