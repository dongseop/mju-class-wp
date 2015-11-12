var express = require('express'),
    User = require('../models/User'),
    Task = require('../models/Task');
var router = express.Router();

function needAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({message: 'Not authorized'});
  }
}

router.get('/', needAuth, function(req, res, next) {
  Task.find({user: req.user.id}, function(err, tasks) {
    if (err) {
      return res.status(500).json({message: 'internal error', desc: err});
    }
    res.json(tasks);
  });
});

router.post('/', needAuth, function(req, res, next) {
  if (!req.body.content) {
    return res.status(400).json({message: 'need content'});
  }
  var task = new Task({
    content: req.body.content,
    category: req.body.category || "N/A",
    priority: req.body.priority || 3,
    deadline: req.body.deadline,
    user: req.user.id
  });
  task.save(function(err, doc) {
    if (err) {
      return res.status(500).json({message: 'internal error', desc: err});
    }
    res.status(201).json(doc);
  });
});

router.put('/:id', needAuth, function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    if (err) {
      return res.status(500).json({message: 'internal error', desc: err});
    }
    if (!task) {
      return res.status(404).json({message: 'task not found'});
    }
    if (req.body.content) {
      task.content = req.body.content;
    }
    if (req.body.category) {
      task.category = req.body.category;
    }
    if (req.body.priority) {
      task.priority = req.body.priority;
    }
    if (req.body.deadline) {
      task.deadline = req.body.deadline;
    }
    if (req.body.done) {
      task.done = req.body.done;
    }
    task.save(function(err) {
      if (err) {
        return res.status(500).json({message: 'internal error', desc: err});
      }
      res.json(task);
    });
  });
});

router.get('/:id', needAuth, function(req, res, next) {
  Task.findById(req.params.id, function(err, task) {
    if (err) {
      return res.status(500).json({message: 'internal error', desc: err});
    }
    if (!task) {
      return res.status(404).json({message: 'task not found'});
    }
    res.json(task);
  });
});

router.delete('/:id', needAuth, function(req, res, next) {
  Task.findOneAndRemove({_id: req.params.id}, function(err, task) {
    if (err) {
      return res.status(500).json({message: 'internal error', desc: err});
    }
    if (!task) {
      return res.status(404).json({message: 'task not found'});
    }
    res.json({id: task._id});
  });
});

module.exports = router;
