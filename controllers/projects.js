var mongoose = require('mongoose'),
    Project = mongoose.model('Project'),
    slugify = require('slugify');

exports.findAll = function(req, res){
  Project.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Project.findOne({'_id': id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
  var params = req.body;
  var project = new Project({
        name: params.name,
        slug: slugify(params.name),
        description: params.description,
        avatar: params.avatar,
        tags: params.tags,
        favorited: params.favorited,
        completed: params.completed,
        progress: params.progress,
        perfectProgress: params.perfectProgress,
        trend: params.progress > params.perfectProgress ? 'up' : params.progress === params.perfectProgress ? 'equal' : 'down' ,
        createdAt: params.createdAt,
        finishAt: params.finishAt,
    });
    project.save(function (err, project) {
      if (err) return console.log(err);
      return res.send(project);
    });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Project.update({"_id":id}, updates,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d projects', numberAffected);
      return res.send(202);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Project.remove({'_id':id},function(result) {
    return res.send(result);
  });
};