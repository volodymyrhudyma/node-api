var mongoose = require('mongoose'),
    Issue = mongoose.model('Issue'),
    slugify = require('slugify');

exports.findAll = function(req, res){
  Issue.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function(req, res){
  var id = req.params.id;
  Issue.findOne({'_id': id},function(err, result) {
    return res.send(result);
  });
};

exports.add = function(req, res) {
  var params = req.body;
    var issue = new Issue({
        name: params.name,
        slug: slugify(params.name),
        description: params.description,
        type: params.type
    });
    issue.save(function (err, issue) {
      if (err) return console.log(err);
      return res.send(issue);
    });
}

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Issue.update({"_id":id}, updates,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d issues', numberAffected);
      return res.send(202);
  });
};

exports.delete = function(req, res){
  var id = req.params.id;
  Issue.remove({'_id':id},function(result) {
    return res.send(result);
  });
};