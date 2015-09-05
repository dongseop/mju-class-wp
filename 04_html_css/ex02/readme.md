# 실습하는 법

1. npm을 이용하여 express-generator (express app 뼈대를 자동 생성해주는 프로그램)을 설치합니다.
  ```
  npm install -g express-generator
  ```

1. express generator를 이용하여 app을 하나 만듭니다.
  ```sh
  express -e -c sass --git app03
  # -e: Jade대신 EJS template 엔진을 이용합니다. Jade도 좋지만, 일단은 HTML과 가장 유사한 EJS를 사용해봅시다.
  # -c sass: sass나 scss를 사용하려고 합니다.
  # --git: git을 사용할 때 편리하도록 .gitignore를 자동으로 생성합니다.
  ```

1. 디렉토리에 들어가서 파일들을 살펴봅시다.
  ```
  cd app03
  atom .
```

1. package들을 설치합니다.
  ```
  npm install
  ```

1. 서버를 실행해봅시다.
  ```
  nodemon ./bin/www
  ```

1. 웹브라우져에서 http://localhost:3000 에 접속해봅시다.

1. 디렉토리 설명
  - app.js: Express 미들웨어들이 설정되어 있습니다.
  - routes/: 라우팅 정보, 즉 URL로 들어온 처리를 어떻게 하는지 관리합니다.
  - views/: 화면에 출력할 View Template이 들어있습니다.
  - public/: static파일로 처리될 image, javascript, stylesheet 등이 있습니다. SCSS를 사용해볼 때도 여기서 해봅니다.
  - node_modules: 로컬에 인스톨된 패키지가 있는 곳입니다. 건드리지 맙시다.

## 참고

### npm : Package Manager for Node.js
- 참고: https://docs.npmjs.com/getting-started/what-is-npm


1. npm init
  - 패키지 관리 시작. 해당 디렉토리에 package.json을 만듭니다.
  - Git Bash에서 에러가 나는 경우 윈도우 cmd 창에서 실행하세요.
  - 차례로 물어보는 것에 대답하면 package.json 파일이 생깁니다.

2. npm install
  - npm를 이용해 원하는 패키지를 인스톨 합시다.
  - 옵션
    - -g (--global)은 global로 인스톨 합니다. 그러면 이 프로그램을 cmd 창에서 유틸리티 처럼 사용할 수 있습니다.
    - --save는 이 프로젝트의 로컬에 인스톨 하면서 package.json에 기록되어 추후 npm install 로 한꺼번에 인스톨 할 수 있습니다.
    - --save-dev는 save와 유사하지만, 프로젝트의 실행에는 필요없고, 개발 단계에서만 필요하다는 뜻입니다.
  - 예
  ```
  npm install -g gulp
  npm install --save-dev gulp
  npm install --save express
  npm install -g express-generator
  ```
