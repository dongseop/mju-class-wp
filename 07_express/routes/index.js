var express = require('express'),
    todos = require('./todos');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {messages: req.flash()});
});

router.get('/signin', function(req, res, next) {
  res.render('signin');
});

router.post('/signin', function(req, res, next) {
  req.flash('success', '로그인 되었습니다.');
  res.redirect('/todos');
});

router.use('/todos', todos);

module.exports = router;
