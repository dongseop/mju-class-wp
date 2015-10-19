var express = require('express'),
    User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err) {
      res.render('error', {message: 'Internal Server Error', error: err});
      return;
    }
    res.render('users/index', {users: users, messages: req.flash()});
  });
});

router.get('/new', function(req, res, next) {
  res.render('users/new', {messages: req.flash()});
});

router.get('/:id/edit', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.render('error', {message: 'Internal Server Error', error: err});
      return;
    }
    res.render('users/edit', {user: user, messages: req.flash()});
  });
});

router.put('/:id', function(req, res, next) {
  var name = req.body.name || "";
  var email = req.body.email || "";
  name = name.trim();
  email = email.trim();

  if (!name || !email) {
    req.flash('danger', '모든 정보를 입력해주세요.');
    res.redirect('back');
    return;
  }

  if (req.body.password != req.body.password_confirmation) {
    req.flash('danger', '비밀번호가 일치하지 않습니다.');
    res.redirect('back');
    return;
  }

  User.findById({_id: req.params.id}, function(err, user) {
    if (err) {
      res.render('error', {message: 'Internal Server Error', error: err});
      return;
    }
    if (!user) {
      req.flash('danger', '존재하지 않는 사용자입니다.');
      res.redirect('back');
      return;
    }

    if (user.password != req.body.current_password) {
      req.flash('danger', '현재 비밀번호가 일치하지 않습니다.');
      res.redirect('back');
      return;
    }

    user.name = req.body.name;
    user.email = req.body.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    user.save(function(err) {
      if (err) {
        res.render('error', {message: 'Internal Server Error', error: err});
        return;
      }
      req.flash('success', '사용자 정보가 변경되었습니다.');
      res.redirect('/users');
    });
  });
});

router.delete('/:id', function(req, res, next) {
  User.findOneAndRemove({_id: req.params.id}, function(err) {
    if (err) {
      res.render('error', {message: 'Internal Server Error', error: err});
      return;
    }
    req.flash('success', '사용자 계정이 삭제되었습니다.');
    res.redirect('/users');
  });
});

router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      res.render('error', {message: 'Internal Server Error', error: err});
      return;
    }
    res.render('users/show', {user: user});
  });
});

router.post('/', function(req, res, next) {
  var name = req.body.name || "";
  var email = req.body.email || "";
  name = name.trim();
  email = email.trim();

  if (!name || !email || !req.body.password) {
    req.flash('danger', '모든 정보를 입력해주세요.');
    res.redirect('back');
    return;
  }

  if (req.body.password != req.body.password_confirmation) {
    req.flash('danger', '비밀번호가 일치하지 않습니다.');
    res.redirect('back');
    return;
  }

  if (req.body.password.length < 6) {
    req.flash('danger', '비밀번호는 6글자 이상이어야 합니다.');
    res.redirect('back');
    return;
  }

  var user = new User({
    name: name,
    email: email,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) {
      req.flash('danger', err.message);
      res.redirect('back');
    } else {
      req.flash('success', '가입이 완료되었습니다. 로그인 해주세요.');
      res.redirect('/');
    }
  });
});


module.exports = router;
