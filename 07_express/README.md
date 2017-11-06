# App1: layout, pug, route 이해하기

## 1. 필요한 기본 유틸 설치: Express Generator, Nodemon
```
# express 프로젝트 기본 골격 생성 프로그램
npm install -g express-generator

# 서버 자동 재시작 도구
npm install -g nodemon
```

## 2. 프로젝트 생성
Express generator를 이용하여
```
express ex01 -v pug -c sass --git
# Layout 엔진 pug 사용
# CSS대신 SASS 사용
# .gitignore 파일 자동 추가
```

## 3. 디렉토리에 들어가기
```
cd ex01
ls -alF
code .       # 자기가 이용하는 에디터를 실행.
```

## 4. 기본 패키지 인스톨
- npm install을 하면 로컬(현재 디렉토리)에 node package를 인스톨 한다.
- '--save' 옵션은 package.json에 해당 내용을 저장하게 한다.
- '--save-dev' 옵션은 package.json의 개발용 의존성 부분에 해당 내용을 저장하게 한다.
  즉, 이 패키지는 사이트의 개발시에 필요하고, 실제 서비스 운영에는 필요없다는 뜻이다.
```
# express generator가 만들어둔 패키지 셋팅 인스톨
npm install

```

### node-sass-middleware가 다음 프로그램들에 dependency가 있을 수 있음
- Python 2.X : https://www.python.org/downloads/release/python-2714/
- Visual Studio Community Edition (Windows)
- XCode command line tool (Mac)

## 5. 프로그램 시작
```
npm start
```


## 6. nodemon
```
# 참고: nodemon을 이용하면 프로그램이 변경될 때 서버 자동 재실행 할 수 있음.
# package.json 수정
  ...
  "scripts": {
    "start": "nodemon ./bin/www"
  },
  ...
```


## 7. Client용 package CDN으로 연결: views/layout.pug
```
    ...
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css')
    link(rel='stylesheet', href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css')
    ...
    script(src='https://code.jquery.com/jquery-3.2.1.min.js')
    script(src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js')
    script(src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js')
    ...
```


## 8. app.js
애플리케이션 미들웨어 설정들

## 9. Route
URL에 이런 내용이 들어오면 이런 작업을 해라

## 10. view
pug를 이용하여 Layout과 partial들. 각 페이지들 구성

## 11. 소스 코드를 분석하고 수정해봅시다!
