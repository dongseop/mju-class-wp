# App2: MongoDB, Mongoose를 이용하여 CRUD 처리

### node-sass-middleware가 다음 프로그램들에 dependency가 있을 수 있음
- Python 2.X : https://www.python.org/downloads/release/python-2714/
- Visual Studio Community Edition (Windows)
- XCode command line tool (Mac)

## 1. Mongoose 설치
```
# mongoose ORM 설치
npm install --save mongoose
```
그 외에 없는 모듈들도 마찬가지 방법으로 설치가 필요함!!

## 2. MongoDB 접속
app.js에 다음 추가
```js
var mongoose   = require('mongoose');
// 본인의 mongodb 접속 URL을 확인해서 id:pwd@server:port/dbname 의 형태로
// local의 경우 mongodb://localhost/dbname 형태
mongoose.Promise = global.Promise; // ES6 Native Promise를 mongoose에서 사용한다.
mongoose.connect('mongodb://dbuser1:mju12345@ds113825.mlab.com:13825/sampledb1', {
  useMongoClient: true
});
mongoose.connection.on('error', console.error);
```

## 3. User 모델 추가
사용자를 저장할 document collection의 모델 models/User.js에 추가
- Todo: 비밀번호가 Database에 plain text로 저장된다. 사용자의 개인정보나 비밀번호는 암호화 해서 저장할 필요가 있음

## 4. users.js controller 구현
Route 함수에 맞게 User 모델을 이용하여 실제 controller logic 구현

```
// users.js
GET /users
GET /users/:id
GET /users/new
GET /users/:id/edit
POST /users
PUT /users/:id
DELETE /users/:id

// Questions
GET /questions
GET /questions/:id
GET /questions/new
GET /questions/:id/edit
POST /questions
PUT /questions/:id
DELETE /questions/:id

// Answer
POST /questions/:id/answers
```
## 6. Middleware를 이용하여 res.locals에 currentuser와 flashMessages 전달
```js
app.use(function(req, res, next) {
  res.locals.currentUser = req.session.user;
  res.locals.flashMessages = req.flash();
  next();
});
```

## 7. Question / Answer 모델도 분석해보자.
- 질문/답변을 어떻게 모델링할 것인가?
- Async/await를 사용하여 callback hell을 없애보자.
- Pagination은 어떻게 할 것인가?
- TODO: 만약 여기에 comment를 추가 한다면?
- TODO: 동일한 사람이 본 경우에 Read 횟수가 증가하지 않게 하려면?

