'use strict';

var mongoose = require('mongoose'),
  Activity = mongoose.model('Activities');

  exports.list_all_activities = function(req, res) {
    Activity.find({}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};




exports.create_an_activity = function(req, res) {
  var new_activity = new Activity(req.body);
  new_activity.save(function(err, new_activity) {
    if (err)
      res.send(err);
    res.json(new_activity);
  });
};


exports.read_an_activity = function(req, res) {
  Activity.findById(req.params.activityId, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};


exports.update_an_activity = function(req, res) {
  Activity.findOneAndUpdate({_id: req.params.activityId}, req.body, {new: true}, function(err, activity) {
    if (err)
      res.send(err);
    res.json(activity);
  });
};


exports.delete_an_activity = function(req, res) {
  Activity.remove({
    _id: req.params.activityId
  }, function(err, activity) {
    if (err)
      res.send(err);
    res.json({ message: 'Activity successfully deleted' });
  });
};
