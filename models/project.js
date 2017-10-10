var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name: String,
    slug: String,
    description: String,
    avatar: String,
    tags: [
    	String
    ],
    favorited: Boolean,
    completed: Boolean,
    progress: Number,
    perfectProgress: Number,
    trend: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    finishAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('Project', ProjectSchema);