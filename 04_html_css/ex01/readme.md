# Node.js를 이용한 간단한 웹서버 구축

## 실행 방법

1. Hello World 웹 서버
  ```
  node app01.js
  ```

2. 03 실습의 내용을 제공하는 웹서버
  ```
  node app02.js
  ```

## TIP
1. 코드를 수정할 때 마다 서버를 새로 띄워야 해서 불편하다면 nodemon을 설치하고 nodemon으로 서버를 실행할 수 있습니다. 소스 코드가 수정되면 자동으로 서버가 다시 시작됩니다.
  ```
  npm install --global nodemon

  nodemon app02.js
  ```
