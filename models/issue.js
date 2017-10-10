var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var IssueSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    type: String,
});

mongoose.model('Issue', IssueSchema);