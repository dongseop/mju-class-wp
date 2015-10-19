# App2: MongoDB, Mongoose를 이용하여 CRUD 처리

## 1. Mongoose 설치
```
# mongoose ORM 설치
npm install --save mongoose
```

## 2. MongoDB 접속
app.js에 다음 추가
```js
var mongoose   = require('mongoose');
// 본인의 mongodb 접속 URL을 확인해서 id:pwd@server:port/dbname 의 형태로
// local의 경우 mongodb://localhost/dbname 형태
mongoose.connect('mongodb://user:asdasd@ds041394.mongolab.com:41394/nodewp');
mongoose.connection.on('error', console.log);
```

## 3. User 모델 추가
사용자를 저장할 document collection의 모델 models/User.js에 추가

## 4. users.js controller 구현
Route 함수에 맞게 User 모델을 이용하여 실제 controller logic 구현

## 5. 사용자 인증
- req.session.user 객체가 있으면 로그인 된 것으로 간주
- signout에서 delete req.session.user를 통해 user객체 삭제

## 6. Middleware를 이용하여 res.locals에 currentuser와 flashMessages 전달
```js
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.user;
  res.locals.flashMessages = req.flash();
  next();
});
```

## 7. 문제점
- 비밀번호가 Database에 plain text로 저장된다. 사용자의 개인정보나 비밀번호는 암호화 해서 저장할 필요가 있음
- 이 부분은 다음 시간에 더 나은 방법으로 새로 구현할 예정
