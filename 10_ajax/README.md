# App4: Ajax와 REST API


## 1. REST API: /routes/tasks.js
- GET '/tasks'
- GET '/tasks/:id'
- POST '/tasks'
- PUT '/tasks/:id'
- DELETE '/tasks/:id'

## 2. Ajax Code: /public/javascripts/todos.js
- Load하면 /tasks에서 tasks를 GET으로 가져와서 rendering
- 사용자가 새 task를 저장하면, /tasks 에 POST하고 다시 rendering
- 사용자가 done을 누르면 변경하고 내용을 PUT으로 전송하고 다시 rendering
- 사용자가 delete버튼을 누르면 내용을 DELETE로 해당 Dom node 삭제
- side bar의 선택이 바뀌면 다시 rendering
