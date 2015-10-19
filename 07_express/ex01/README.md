# App1: 레이아웃, Jade, Route 이해하기

## 1. 필요한 기본 유틸 설치: Express Generator, Bower, gulp
```
# express 프로젝트 기본 골격 생성 프로그램
npm install -g express-generator

# 클라이언트(브라우저쪽) 패키지 관리 도구
npm install -g bower

# 빌드 자동화 도구 (make같은 기능의 프로그램)
npm install -g gulp

# 서버 자동 재시작 도구
npm install -g nodemon
```

## 2. 프로젝트 생성
Express generator를 이용하여
```
express ex01 --git
# Layout 엔진 Jade 사용
# .gitignore 파일 자동 추가
```

## 3. 디렉토리에 들어가기
```
cd ex01
ls -alF
atom .
```

## 4. 기본 패키지 인스톨
- npm install을 하면 로컬(현재 디렉토리)에 node package를 인스톨 한다.
- '--save' 옵션은 package.json에 해당 내용을 저장하게 한다.
- '--save-dev' 옵션은 package.json의 개발용 의존성 부분에 해당 내용을 저장하게 한다.
  즉, 이 패키지는 사이트의 개발시에 필요하고, 실제 서비스 운영에는 필요없다는 뜻이다.
```
# express generator가 만들어둔 패키지 셋팅 인스톨
npm install

# gulp 로컬 인스톨
npm install --save-dev gulp

# gulp관련 패키지 인스톨
npm install --save-dev gulp-jshint gulp-sass gulp-nodemon

# session을 사용하기 위해서 인스톨
npm install --save express-session method-override moment connect-flash
```


## 5. 프로그램 시작
```
npm start
```
참고: nodemon을 이용하면 프로그램이 변경될 때 서버 자동 재실행 할 수 있음.

## 6. Client용 package install
```
bower init
bower install --save bootstrap jquery fontawesome bourbon
```

## 7. gulpfile.js 작성
gulpfile.js에 작업들을 기술하면 gulp 명령을 통해 해당 작업을 수행할 수 있다.
gulpfile.js을 잘 살펴보자.
현재 다음과 같은 작업을 정의하고 있다.

- lint: JavaScript 파일들의 문법을 검사하고 report한다.
- sass: scss파일들을 컴파일해서 public/stylesheet에 저장한다.
- watch: sass디렉토리를 감시해서 변경이 일어나면 'sass' 작업을 수행한다.
- nodemon: nodemon을 통해 bin/www 파일을 실행한다. (서버 실행)
- default: 아무 명령을 수행하지 않으면 실행할 작업. lint, sass, watch, nodemon을 차례로 수행한다.

그러므로 아래와 같은 명령으로 서버를 실행하면, scss파일 변경되면 자동 컴파일하고, js코드 바뀌면 자동으로 서버 재실행하도록 해서 서버를 실행할 수 있다.

```
gulp
```

## 8. app.js
애플리케이션 미들웨어 설정들

## 9. Route
URL에 이런 내용이 들어오면 이런 작업을 해라

## 10. view
Jade를 이용하여 Layout과 partial들. 각 페이지들 구성

## 11. flash
