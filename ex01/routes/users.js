var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/index', {users: [
    {_id: 1, name: '지드래곤', email: 'gd@test.com'},
    {_id: 2, name: '탑', email: 'top@test.com'},
    {_id: 3, name: '승리', email: 'victory@test.com'},
    {_id: 4, name: '태양', email: 'sun@test.com'},
    {_id: 5, name: '대성', email: 'ds@test.com'}
  ]});
});

router.get('/new', function(req, res, next) {
  res.render('users/new');
});

router.get('/:id/edit', function(req, res, next) {
  res.render('users/edit', {user: {_id: 1, name: '지드래곤', email: 'gd@test.com'}});
});

router.put('/:id', function(req, res, next) {
  req.flash('success', '사용자 정보가 변경되었습니다.');
  res.redirect('/users');
});

router.delete('/:id', function(req, res, next) {
  req.flash('success', '사용자 계정이 삭제되었습니다.');
  res.redirect('/users');
});

router.get('/:id', function(req, res, next) {
  res.render('users/show', {user: {_id: 1, name: '지드래곤', email: 'gd@test.com'}});
});

router.post('/', function(req, res, next) {
  req.flash('success', '가입이 완료되었습니다. 로그인 해주세요.');
  res.redirect('/');
});


module.exports = router;
