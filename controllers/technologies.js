var mongoose = require('mongoose'),
    Technology = mongoose.model('Technology'),
    slugify = require('slugify');

exports.findAll = function(req, res){
  Technology.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Technology.findOne({'_id': id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
  var params = req.body;
    var project = new Technology({
        name: params.name,
        slug: slugify(params.name),
        favorited: params.favorited,
        usageCount: params.usageCount
    });
    project.save(function (err, project) {
      if (err) return console.log(err);
      return res.send(project);
    });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Technology.update({"_id":id}, updates,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d technologies', numberAffected);
      return res.send(202);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Technology.remove({'_id':id},function(result) {
    return res.send(result);
  });
};