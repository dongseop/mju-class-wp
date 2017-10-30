var express = require('express'),
  User = require('../models/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

// 09-1. Session 참고: 세션을 이용한 로그인
router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, user) {
    if (err) {
      res.render('error', {message: "Error", error: err});
    } else if (!user || user.password !== req.body.password) {
      req.flash('danger', 'Invalid username or password.');
      res.redirect('back');
    } else {
      req.session.user = user;
      req.flash('success', 'Welcome!');
      res.redirect('/');
    }
  });
});

router.get('/signout', function(req, res, next) {
  delete req.session.user;
  req.flash('success', 'Successfully signed out.');
  res.redirect('/');
});

module.exports = router;
